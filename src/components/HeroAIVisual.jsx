import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Brain } from 'lucide-react';

export default function HeroAIVisual() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [activeStep, setActiveStep] = useState(0);

  // Cycle inference status simulated ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth || 500);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Nodes generation (multi-layer neural network layout with natural jitter)
    const layers = [4, 6, 7, 5, 3];
    const nodes = [];
    const layerSpacing = width / (layers.length + 1);

    layers.forEach((count, lIndex) => {
      const x = (lIndex + 1) * layerSpacing;
      const verticalSpacing = height / (count + 1);
      for (let i = 0; i < count; i++) {
        const y = (i + 1) * verticalSpacing + (Math.sin(lIndex * 1.5 + i) * 12);
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          layer: lIndex,
          index: i,
          radius: 3.5 + Math.random() * 2,
          pulse: Math.random() * Math.PI * 2,
          speed: 0.02 + Math.random() * 0.02,
          color:
            lIndex === 0
              ? '#38bdf8' // Cyan (Input)
              : lIndex === layers.length - 1
              ? '#a855f7' // Purple (Output)
              : '#6366f1', // Indigo (Hidden)
        });
      }
    });

    // Connections between adjacent layers
    const connections = [];
    nodes.forEach((n1) => {
      nodes.forEach((n2) => {
        if (n2.layer === n1.layer + 1) {
          // Connect with some probability or full
          if (Math.random() > 0.35 || n1.layer === 0) {
            connections.push({
              from: n1,
              to: n2,
              weight: 0.2 + Math.random() * 0.8,
              signalPos: Math.random(),
              signalSpeed: 0.005 + Math.random() * 0.008,
            });
          }
        }
      });
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      connections.forEach((conn) => {
        // Draw synapse line
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.strokeStyle = `rgba(99, 102, 241, ${0.12 * conn.weight})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw pulse signal traveling
        conn.signalPos += conn.signalSpeed;
        if (conn.signalPos > 1) conn.signalPos = 0;

        const pulseX = conn.from.x + (conn.to.x - conn.from.x) * conn.signalPos;
        const pulseY = conn.from.y + (conn.to.y - conn.from.y) * conn.signalPos;

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = '#67e8f9';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw and update nodes
      nodes.forEach((node) => {
        node.pulse += node.speed;
        // Subtle organic hovering
        node.y = node.baseY + Math.sin(node.pulse) * 4;

        // Proximity reaction to mouse
        const mouseDist = Math.hypot(node.x - mousePos.x, node.y - mousePos.y);
        if (mouseDist < 100) {
          const force = (1 - mouseDist / 100) * 15;
          const angle = Math.atan2(node.y - mousePos.y, node.x - mousePos.x);
          node.x += Math.cos(angle) * force * 0.2;
          node.y += Math.sin(angle) * force * 0.2;
        } else {
          // Spring back
          node.x += (node.baseX - node.x) * 0.05;
        }

        // Outer glow
        const glowRadius = node.radius + Math.sin(node.pulse) * 2;
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          glowRadius * 3
        );
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  const statusPipeline = [
    { label: "TensorFlow / CNN Active", code: "val_acc: 98.4%", color: "text-cyan-400" },
    { label: "FastAPI Async Worker", code: "status: 200 OK (18ms)", color: "text-emerald-400" },
    { label: "Docker Multi-Stage", code: "container: healthy", color: "text-purple-400" },
    { label: "Inference Stream", code: "tokens/sec: 42.8", color: "text-blue-400" },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center p-4 select-none"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient -z-10 blur-3xl opacity-60" />
      
      {/* Outer ambient decorative ring */}
      <div className="absolute inset-4 rounded-full border border-indigo-500/10 animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-12 rounded-full border border-purple-500/10 animate-[spin_40s_linear_infinite_reverse]" />

      {/* Interactive Neural Canvas */}
      <div className="relative w-full h-full rounded-3xl glass-panel-glow overflow-hidden p-2">
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-crosshair"
          title="Interactive Neural Network - Hover to perturb synaptic nodes"
        />

        {/* Top Header Badge */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-[11px] text-cyan-300 font-medium">NEURAL ARCHITECTURE</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-950/60 border border-indigo-500/30 font-mono text-[11px] text-indigo-300">
            <Brain className="w-3.5 h-3.5 text-indigo-400" />
            <span>Multi-Layer Perceptron</span>
          </div>
        </div>

        {/* Floating tech badge 1: Top Right */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-cyan-500/30 shadow-lg shadow-cyan-500/10 pointer-events-none"
        >
          <div className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="font-mono text-[11px] text-slate-200">FastAPI • PyTorch</span>
        </motion.div>

        {/* Floating code fragment 2: Middle Left */}
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-500/10 pointer-events-none"
        >
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
          <span className="font-mono text-[11px] text-purple-300">async def inference(ctx):</span>
        </motion.div>

        {/* Bottom Floating Card: Prompt-specified Status Card */}
        <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wider uppercase font-mono">
                  AI / SOFTWARE ENGINEER
                </h4>
                <p className="text-[11px] text-indigo-300 font-medium">
                  Python • AI • Cloud • Full Stack
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE</span>
            </div>
          </div>

          {/* Micro status ticker */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="truncate">{statusPipeline[activeStep].label}</span>
            <span className={`font-semibold ml-2 ${statusPipeline[activeStep].color}`}>
              {statusPipeline[activeStep].code}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
