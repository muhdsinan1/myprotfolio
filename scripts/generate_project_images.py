import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUTPUT_DIR = r"D:\myprotfolio\public\assets\projects"
os.makedirs(OUTPUT_DIR, exist_ok=True)

WIDTH = 960
HEIGHT = 600

def get_font(size, bold=False):
    # Try common Windows fonts
    font_paths = [
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
    ]
    for path in font_paths:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                pass
    return ImageFont.load_default()

font_title = get_font(28, bold=True)
font_subtitle = get_font(18, bold=False)
font_mono = get_font(14, bold=True)
font_small = get_font(13, bold=False)
font_tiny = get_font(11, bold=True)

# -------------------------------------------------------------
# 1. AI Digital Human (ai-digital-human.png)
# -------------------------------------------------------------
def make_ai_digital_human():
    img = Image.new("RGB", (WIDTH, HEIGHT), "#0D1117")
    draw = ImageDraw.Draw(img)

    # Gradient background glow
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([WIDTH//2 - 250, HEIGHT//2 - 200, WIDTH//2 + 250, HEIGHT//2 + 250], fill=(184, 255, 61, 35))
    glow_draw.ellipse([WIDTH//2 - 150, HEIGHT//2 - 100, WIDTH//2 + 150, HEIGHT//2 + 150], fill=(59, 130, 246, 40))
    glow = glow.filter(ImageFilter.GaussianBlur(60))
    img.paste(glow, (0, 0), glow)
    draw = ImageDraw.Draw(img)

    # Load Real Avatar if available
    avatar_path = r"D:\ai-digital-human\frontend\snuggle-pal\public\avatar.png"
    if os.path.exists(avatar_path):
        try:
            av = Image.open(avatar_path).convert("RGB")
            # Crop to face/shoulders and fit into center window
            av_w, av_h = av.size
            crop_box = (av_w // 4, 0, av_w * 3 // 4, int(av_h * 0.85))
            av_crop = av.crop(crop_box)
            av_crop = av_crop.resize((420, 480), Image.Resampling.LANCZOS)
            
            # Mask with rounded corners
            mask = Image.new("L", (420, 480), 0)
            mask_draw = ImageDraw.Draw(mask)
            mask_draw.rounded_rectangle([0, 0, 420, 480], radius=24, fill=255)
            
            img.paste(av_crop, (WIDTH//2 - 210, 80), mask)
            
            # Draw sleek frame border around avatar
            draw.rounded_rectangle([WIDTH//2 - 210, 80, WIDTH//2 + 210, 560], radius=24, outline="#30363D", width=2)
        except Exception as e:
            print(f"Error loading avatar: {e}")

    # Top Control Bar (Browser/Studio Header)
    draw.rounded_rectangle([30, 20, WIDTH - 30, 65], radius=14, fill="#161B22", outline="#30363D", width=1)
    # Window dots
    draw.ellipse([45, 38, 55, 48], fill="#FF5F56")
    draw.ellipse([62, 38, 72, 48], fill="#FFBD2E")
    draw.ellipse([79, 38, 89, 48], fill="#27C93F")
    draw.text((110, 33), "AI DIGITAL HUMAN ENGINE • REAL-TIME INTERACTION STREAM", fill="#C9D1D9", font=font_mono)
    
    # Status Pill
    draw.rounded_rectangle([WIDTH - 220, 28, WIDTH - 45, 57], radius=20, fill="#1F2937", outline="#B8FF3D", width=1)
    draw.ellipse([WIDTH - 208, 39, WIDTH - 200, 47], fill="#B8FF3D")
    draw.text((WIDTH - 192, 34), "WEBSOCKET 60 FPS", fill="#B8FF3D", font=font_tiny)

    # Left Floating Telemetry Card
    draw.rounded_rectangle([45, 120, 240, 260], radius=18, fill="#161B22", outline="#30363D", width=1)
    draw.text((60, 135), "LATENCY TELEMETRY", fill="#8B949E", font=font_tiny)
    draw.text((60, 155), "< 22ms", fill="#FFFFFF", font=font_title)
    draw.text((60, 195), "Inference: PyTorch", fill="#C9D1D9", font=font_small)
    draw.text((60, 215), "Transport: AsyncIO", fill="#C9D1D9", font=font_small)
    draw.text((60, 235), "Audio: 48kHz WAV", fill="#B8FF3D", font=font_small)

    # Right Floating Dialogue / Speech Card
    draw.rounded_rectangle([WIDTH - 250, 120, WIDTH - 45, 270], radius=18, fill="#161B22", outline="#30363D", width=1)
    draw.text((WIDTH - 235, 135), "NEURAL SPEECH STREAM", fill="#8B949E", font=font_tiny)
    draw.text((WIDTH - 235, 160), "\"Hello! I am your AI", fill="#FFFFFF", font=font_subtitle)
    draw.text((WIDTH - 235, 185), "digital assistant. How", fill="#FFFFFF", font=font_subtitle)
    draw.text((WIDTH - 235, 210), "can I assist you?\"", fill="#FFFFFF", font=font_subtitle)
    draw.text((WIDTH - 235, 245), "● Status: Synthesizing", fill="#B8FF3D", font=font_tiny)

    # Bottom Audio Waveform Visualizer
    draw.rounded_rectangle([WIDTH//2 - 190, 500, WIDTH//2 + 190, 545], radius=24, fill="#161B22", outline="#30363D", width=1)
    draw.text((WIDTH//2 - 170, 515), "AUDIO INFERENCE:", fill="#8B949E", font=font_tiny)
    # Waveform bars
    bar_x = WIDTH//2 - 30
    bar_heights = [8, 14, 22, 12, 26, 18, 10, 20, 15, 7]
    for h in bar_heights:
        draw.rounded_rectangle([bar_x, 523 - h//2, bar_x + 3, 523 + h//2], radius=2, fill="#B8FF3D")
        bar_x += 7

    out_file = os.path.join(OUTPUT_DIR, "ai-digital-human.png")
    img.save(out_file, "PNG", quality=95)
    print(f"Saved: {out_file}")

# -------------------------------------------------------------
# 2. GOIA AI Chatbot (goia-chatbot.png)
# -------------------------------------------------------------
def make_goia_chatbot():
    img = Image.new("RGB", (WIDTH, HEIGHT), "#0F172A")
    draw = ImageDraw.Draw(img)

    # Subtle ambient gradient
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([WIDTH//2 - 250, HEIGHT//2 - 150, WIDTH//2 + 250, HEIGHT//2 + 250], fill=(37, 99, 235, 45))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    img.paste(glow, (0, 0), glow)
    draw = ImageDraw.Draw(img)

    # Background screen: Real Order Tracking Screencapture
    order_screen_path = r"D:\screencapture-127-0-0-1-8000-orders-orders-32-track-2026-03-27-09_43_55.png"
    if os.path.exists(order_screen_path):
        try:
            scr = Image.open(order_screen_path).convert("RGB")
            # Crop top portion of the order tracking page
            w, h = scr.size
            scr_crop = scr.crop((int(w * 0.1), int(h * 0.05), int(w * 0.9), int(h * 0.7)))
            scr_crop = scr_crop.resize((520, 460), Image.Resampling.LANCZOS)
            
            # Mask with rounded corners
            mask = Image.new("L", (520, 460), 0)
            mask_draw = ImageDraw.Draw(mask)
            mask_draw.rounded_rectangle([0, 0, 520, 460], radius=20, fill=255)
            
            img.paste(scr_crop, (40, 100), mask)
            draw.rounded_rectangle([40, 100, 560, 560], radius=20, outline="#334155", width=2)
        except Exception as e:
            print(f"Error loading order screen: {e}")

    # Top Header
    draw.rounded_rectangle([30, 20, WIDTH - 30, 65], radius=14, fill="#1E293B", outline="#334155", width=1)
    draw.ellipse([45, 38, 55, 48], fill="#EF4444")
    draw.ellipse([62, 38, 72, 48], fill="#F59E0B")
    draw.ellipse([79, 38, 89, 48], fill="#10B981")
    draw.text((110, 33), "GOIA CONVERSATIONAL AGENT • DIALOGFLOW NLP & FASTAPI FULFILLMENT", fill="#F1F5F9", font=font_mono)

    # Chatbot Interactive Window on Right
    chat_x = 590
    chat_y = 90
    chat_w = 340
    chat_h = 480
    draw.rounded_rectangle([chat_x, chat_y, chat_x + chat_w, chat_y + chat_h], radius=22, fill="#1E293B", outline="#475569", width=2)
    
    # Chat Header
    draw.rounded_rectangle([chat_x, chat_y, chat_x + chat_w, chat_y + 60], radius=22, fill="#0F172A")
    draw.ellipse([chat_x + 15, chat_y + 15, chat_x + 45, chat_y + 45], fill="#2563EB")
    draw.text((chat_x + 23, chat_y + 20), "G", fill="#FFFFFF", font=font_title)
    draw.text((chat_x + 55, chat_y + 14), "GOIA Assistant", fill="#FFFFFF", font=font_subtitle)
    draw.text((chat_x + 55, chat_y + 35), "● Intent Engine Online", fill="#10B981", font=font_tiny)

    # Chat message 1 (User)
    draw.rounded_rectangle([chat_x + 70, chat_y + 80, chat_x + chat_w - 20, chat_y + 130], radius=16, fill="#2563EB")
    draw.text((chat_x + 85, chat_y + 92), "Where is my order #32?", fill="#FFFFFF", font=font_small)

    # Chat message 2 (Bot)
    draw.rounded_rectangle([chat_x + 20, chat_y + 145, chat_x + chat_w - 50, chat_y + 245], radius=16, fill="#334155")
    draw.text((chat_x + 35, chat_y + 155), "Your order #32 is confirmed!", fill="#FFFFFF", font=font_mono)
    draw.text((chat_x + 35, chat_y + 180), "Items: 3 items (₹5833.0)", fill="#CBD5E1", font=font_small)
    draw.text((chat_x + 35, chat_y + 200), "Status: In Transit", fill="#38BDF8", font=font_small)
    draw.text((chat_x + 35, chat_y + 220), "Delivery in: 3-5 days", fill="#4ADE80", font=font_small)

    # Chat message 3 (User)
    draw.rounded_rectangle([chat_x + 80, chat_y + 260, chat_x + chat_w - 20, chat_y + 305], radius=16, fill="#2563EB")
    draw.text((chat_x + 95, chat_y + 272), "Can you send the invoice?", fill="#FFFFFF", font=font_small)

    # Chat message 4 (Bot)
    draw.rounded_rectangle([chat_x + 20, chat_y + 320, chat_x + chat_w - 60, chat_y + 375], radius=16, fill="#334155")
    draw.text((chat_x + 35, chat_y + 332), "Invoice PDF generated & sent", fill="#FFFFFF", font=font_small)
    draw.text((chat_x + 35, chat_y + 350), "via webhook fulfillment.", fill="#38BDF8", font=font_small)

    # Tech Pills at bottom of Chat Window
    draw.rounded_rectangle([chat_x + 15, chat_y + 420, chat_x + 160, chat_y + 455], radius=12, fill="#0F172A", outline="#334155", width=1)
    draw.text((chat_x + 25, chat_y + 430), "Webhook: < 18ms", fill="#38BDF8", font=font_tiny)

    draw.rounded_rectangle([chat_x + 175, chat_y + 420, chat_x + chat_w - 15, chat_y + 455], radius=12, fill="#0F172A", outline="#334155", width=1)
    draw.text((chat_x + 185, chat_y + 430), "MySQL DB Sync", fill="#10B981", font=font_tiny)

    out_file = os.path.join(OUTPUT_DIR, "goia-chatbot.png")
    img.save(out_file, "PNG", quality=95)
    print(f"Saved: {out_file}")

# -------------------------------------------------------------
# 3. Potato Leaf Disease Detection (potato-disease.png)
# -------------------------------------------------------------
def make_potato_disease():
    img = Image.new("RGB", (WIDTH, HEIGHT), "#062817")
    draw = ImageDraw.Draw(img)

    # Green botanic gradient glow
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([WIDTH//2 - 200, HEIGHT//2 - 150, WIDTH//2 + 250, HEIGHT//2 + 250], fill=(16, 185, 129, 45))
    glow_draw.ellipse([200, 300, 500, 600], fill=(34, 197, 94, 30))
    glow = glow.filter(ImageFilter.GaussianBlur(70))
    img.paste(glow, (0, 0), glow)
    draw = ImageDraw.Draw(img)

    # Top Control Bar
    draw.rounded_rectangle([30, 20, WIDTH - 30, 65], radius=14, fill="#0B3B24", outline="#135E3B", width=1)
    draw.ellipse([45, 38, 55, 48], fill="#EF4444")
    draw.ellipse([62, 38, 72, 48], fill="#F59E0B")
    draw.ellipse([79, 38, 89, 48], fill="#10B981")
    draw.text((110, 33), "AGRI-VISION AI • CONVOLUTIONAL NEURAL NETWORK LEAF DIAGNOSTIC PIPELINE", fill="#ECFDF5", font=font_mono)

    # Left Container: Leaf Image & Computer Vision Bounding Grid
    left_x = 45
    left_y = 90
    draw.rounded_rectangle([left_x, left_y, left_x + 450, left_y + 475], radius=22, fill="#051E11", outline="#135E3B", width=2)
    
    # Styled leaf graphic inside viewport
    leaf_canvas = Image.new("RGBA", (410, 320), (10, 45, 25, 255))
    l_draw = ImageDraw.Draw(leaf_canvas)
    # Leaf contour
    l_draw.ellipse([60, 40, 350, 280], fill=(22, 101, 52, 255), outline=(74, 222, 128, 255), width=3)
    # Central vein
    l_draw.line([60, 160, 350, 160], fill=(74, 222, 128, 255), width=3)
    l_draw.line([130, 160, 200, 80], fill=(74, 222, 128, 180), width=2)
    l_draw.line([200, 160, 270, 90], fill=(74, 222, 128, 180), width=2)
    l_draw.line([130, 160, 200, 240], fill=(74, 222, 128, 180), width=2)
    l_draw.line([200, 160, 270, 230], fill=(74, 222, 128, 180), width=2)
    
    # Disease lesion spot (Early Blight concentric ring)
    l_draw.ellipse([170, 90, 240, 150], fill=(120, 53, 15, 220), outline=(245, 158, 11, 255), width=2)
    l_draw.ellipse([185, 102, 225, 138], fill=(69, 26, 3, 240), outline=(245, 158, 11, 200), width=1)
    
    # Detection bounding box
    l_draw.rectangle([150, 70, 260, 170], outline=(239, 68, 68, 255), width=2)
    l_draw.text((155, 50), "Early Blight Lesion (98.4%)", fill=(239, 68, 68, 255), font=font_tiny)
    
    img.paste(leaf_canvas, (left_x + 20, left_y + 20))

    # CNN Filter Stats under leaf
    draw.rounded_rectangle([left_x + 20, left_y + 360, left_x + 430, left_y + 450], radius=14, fill="#0B3B24", outline="#135E3B", width=1)
    draw.text((left_x + 35, left_y + 375), "INPUT: 256x256x3 RGB • AUGMENTATION: FLIP & ROTATION", fill="#A7F3D0", font=font_tiny)
    draw.text((left_x + 35, left_y + 400), "CONV2D → BATCHNORM → MAXPOOL → DROPOUT(0.25)", fill="#34D399", font=font_mono)
    draw.text((left_x + 35, left_y + 425), "OPENCV PREPROCESSING: GAUSSIAN NOISE FILTER", fill="#6EE7B7", font=font_tiny)

    # Right Container: Classification Metrics & Probabilities
    right_x = 525
    right_y = 90
    draw.rounded_rectangle([right_x, right_y, right_x + 390, right_y + 475], radius=22, fill="#051E11", outline="#135E3B", width=2)
    
    draw.text((right_x + 25, right_y + 25), "MODEL CLASSIFICATION", fill="#6EE7B7", font=font_tiny)
    draw.text((right_x + 25, right_y + 45), "Early Blight Detected", fill="#FDE047", font=font_title)
    draw.text((right_x + 25, right_y + 85), "Confidence Score: 98.42%", fill="#FFFFFF", font=font_subtitle)

    # Probability Bars
    # 1. Early Blight
    draw.text((right_x + 25, right_y + 130), "Early Blight (Alternaria solani)", fill="#F1F5F9", font=font_small)
    draw.text((right_x + 310, right_y + 130), "98.4%", fill="#FDE047", font=font_mono)
    draw.rounded_rectangle([right_x + 25, right_y + 152, right_x + 365, right_y + 164], radius=6, fill="#0B3B24")
    draw.rounded_rectangle([right_x + 25, right_y + 152, right_x + int(25 + 340 * 0.984), right_y + 164], radius=6, fill="#EAB308")

    # 2. Late Blight
    draw.text((right_x + 25, right_y + 185), "Late Blight (Phytophthora infestans)", fill="#F1F5F9", font=font_small)
    draw.text((right_x + 325, right_y + 185), "1.2%", fill="#94A3B8", font=font_mono)
    draw.rounded_rectangle([right_x + 25, right_y + 207, right_x + 365, right_y + 219], radius=6, fill="#0B3B24")
    draw.rounded_rectangle([right_x + 25, right_y + 207, right_x + int(25 + 340 * 0.012), right_y + 219], radius=6, fill="#38BDF8")

    # 3. Healthy
    draw.text((right_x + 25, right_y + 240), "Healthy Foliage", fill="#F1F5F9", font=font_small)
    draw.text((right_x + 325, right_y + 240), "0.4%", fill="#94A3B8", font=font_mono)
    draw.rounded_rectangle([right_x + 25, right_y + 262, right_x + 365, right_y + 274], radius=6, fill="#0B3B24")
    draw.rounded_rectangle([right_x + 25, right_y + 262, right_x + int(25 + 340 * 0.004), right_y + 274], radius=6, fill="#4ADE80")

    # Architecture specs block
    draw.rounded_rectangle([right_x + 20, right_y + 310, right_x + 370, right_y + 445], radius=16, fill="#0B3B24", outline="#135E3B", width=1)
    draw.text((right_x + 35, right_y + 325), "NEURAL NETWORK SPECS", fill="#A7F3D0", font=font_tiny)
    draw.text((right_x + 35, right_y + 350), "• Framework: TensorFlow / Keras", fill="#F1F5F9", font=font_small)
    draw.text((right_x + 35, right_y + 375), "• Training Loss: 0.042 | Validation: 96.8%", fill="#F1F5F9", font=font_small)
    draw.text((right_x + 35, right_y + 400), "• Inference Latency: 34ms on CPU", fill="#34D399", font=font_mono)

    out_file = os.path.join(OUTPUT_DIR, "potato-disease.png")
    img.save(out_file, "PNG", quality=95)
    print(f"Saved: {out_file}")

# -------------------------------------------------------------
# 4. Sports Celebrity Classification (sports-celebrity.png)
# -------------------------------------------------------------
def make_sports_celebrity():
    img = Image.new("RGB", (WIDTH, HEIGHT), "#0F172A")
    draw = ImageDraw.Draw(img)

    # Violet/Indigo ambient glow
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([WIDTH//2 - 200, HEIGHT//2 - 150, WIDTH//2 + 250, HEIGHT//2 + 250], fill=(139, 92, 246, 40))
    glow_draw.ellipse([600, 200, 900, 500], fill=(59, 130, 246, 35))
    glow = glow.filter(ImageFilter.GaussianBlur(70))
    img.paste(glow, (0, 0), glow)
    draw = ImageDraw.Draw(img)

    # Top Control Bar
    draw.rounded_rectangle([30, 20, WIDTH - 30, 65], radius=14, fill="#1E293B", outline="#334155", width=1)
    draw.ellipse([45, 38, 55, 48], fill="#EF4444")
    draw.ellipse([62, 38, 72, 48], fill="#F59E0B")
    draw.ellipse([79, 38, 89, 48], fill="#10B981")
    draw.text((110, 33), "FACIAL FEATURE EXTRACTION & SVM CLASSIFIER • OPENCV & PYWAVELETS", fill="#F8FAFC", font=font_mono)

    # Left: Face Landmark Detection & Wavelet Feature Matrix
    left_x = 45
    left_y = 90
    draw.rounded_rectangle([left_x, left_y, left_x + 430, left_y + 475], radius=22, fill="#1E293B", outline="#475569", width=2)
    
    # Face silhouette with Haar Cascade alignment
    face_box = Image.new("RGBA", (390, 280), (15, 23, 42, 255))
    f_draw = ImageDraw.Draw(face_box)
    # Head outline
    f_draw.ellipse([110, 30, 280, 230], outline=(148, 163, 184, 180), width=2)
    # Haar Cascade face bounding box
    f_draw.rectangle([95, 20, 295, 245], outline=(96, 165, 250, 255), width=2)
    f_draw.text((100, 5), "HaarCascade_FrontalFace_Default", fill=(96, 165, 250, 255), font=font_tiny)
    
    # Eye bounding boxes
    f_draw.rectangle([135, 75, 185, 115], outline=(52, 211, 153, 255), width=2)
    f_draw.text((140, 60), "Eye_L", fill=(52, 211, 153, 255), font=font_tiny)
    
    f_draw.rectangle([205, 75, 255, 115], outline=(52, 211, 153, 255), width=2)
    f_draw.text((210, 60), "Eye_R", fill=(52, 211, 153, 255), font=font_tiny)
    
    # Facial feature grid points
    grid_points = [(160, 95), (230, 95), (195, 140), (165, 180), (225, 180), (195, 195)]
    for pt in grid_points:
        f_draw.ellipse([pt[0]-4, pt[1]-4, pt[0]+4, pt[1]+4], fill=(244, 63, 94, 255))
    
    img.paste(face_box, (left_x + 20, left_y + 20))

    # Wavelet Feature Specs under face box
    draw.rounded_rectangle([left_x + 20, left_y + 320, left_x + 410, left_y + 445], radius=16, fill="#0F172A", outline="#334155", width=1)
    draw.text((left_x + 35, left_y + 335), "WAVELET TRANSFORM EXTRACTION (db1)", fill="#C084FC", font=font_tiny)
    draw.text((left_x + 35, left_y + 360), "• High-Frequency Edge Representation", fill="#E2E8F0", font=font_small)
    draw.text((left_x + 35, left_y + 385), "• Vertical + Horizontal Component Stacking", fill="#E2E8F0", font=font_small)
    draw.text((left_x + 35, left_y + 410), "• Dimension: 32x32 Scaled Vector Array", fill="#38BDF8", font=font_mono)

    # Right: Classification Output & Top Probabilities
    right_x = 505
    right_y = 90
    draw.rounded_rectangle([right_x, right_y, right_x + 410, right_y + 475], radius=22, fill="#1E293B", outline="#475569", width=2)
    
    draw.text((right_x + 25, right_y + 25), "SVM PREDICTION INFERENCE", fill="#A78BFA", font=font_tiny)
    draw.text((right_x + 25, right_y + 48), "Lionel Messi", fill="#FFFFFF", font=font_title)
    draw.text((right_x + 25, right_y + 85), "Classification Confidence: 94.8%", fill="#34D399", font=font_subtitle)

    # Sports Icon Ranking
    candidates = [
        ("Lionel Messi", 0.948, "#A855F7"),
        ("Cristiano Ronaldo", 0.032, "#64748B"),
        ("Virat Kohli", 0.012, "#64748B"),
        ("Roger Federer", 0.008, "#64748B"),
    ]
    
    bar_y = right_y + 130
    for name, conf, col in candidates:
        draw.text((right_x + 25, bar_y), name, fill="#F8FAFC", font=font_small)
        draw.text((right_x + 330, bar_y), f"{conf*100:.1f}%", fill=col, font=font_mono)
        draw.rounded_rectangle([right_x + 25, bar_y + 20, right_x + 380, bar_y + 30], radius=5, fill="#0F172A")
        draw.rounded_rectangle([right_x + 25, bar_y + 20, right_x + int(25 + 355 * conf), bar_y + 30], radius=5, fill=col)
        bar_y += 50

    # Hyperparameter specs
    draw.rounded_rectangle([right_x + 20, right_y + 340, right_x + 390, right_y + 445], radius=16, fill="#0F172A", outline="#334155", width=1)
    draw.text((right_x + 35, right_y + 355), "GRID SEARCH TUNED SVM HYPERPARAMETERS", fill="#94A3B8", font=font_tiny)
    draw.text((right_x + 35, right_y + 380), "• Kernel: RBF (Radial Basis Function)", fill="#F8FAFC", font=font_small)
    draw.text((right_x + 35, right_y + 405), "• C = 10, Gamma = 'scale' | Accuracy: 89.2%", fill="#38BDF8", font=font_mono)

    out_file = os.path.join(OUTPUT_DIR, "sports-celebrity.png")
    img.save(out_file, "PNG", quality=95)
    print(f"Saved: {out_file}")

# -------------------------------------------------------------
# 5. FoOtAreNa (footarena.png)
# -------------------------------------------------------------
def make_footarena():
    img = Image.new("RGB", (WIDTH, HEIGHT), "#0B1914")
    draw = ImageDraw.Draw(img)

    # Turf Green / Emerald glow
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([WIDTH//2 - 250, HEIGHT//2 - 150, WIDTH//2 + 250, HEIGHT//2 + 250], fill=(16, 185, 129, 45))
    glow_draw.ellipse([WIDTH - 300, 300, WIDTH, 600], fill=(184, 255, 61, 30))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    img.paste(glow, (0, 0), glow)
    draw = ImageDraw.Draw(img)

    # Top Header
    draw.rounded_rectangle([30, 20, WIDTH - 30, 65], radius=14, fill="#132E24", outline="#1F4D3C", width=1)
    draw.ellipse([45, 38, 55, 48], fill="#EF4444")
    draw.ellipse([62, 38, 72, 48], fill="#F59E0B")
    draw.ellipse([79, 38, 89, 48], fill="#10B981")
    draw.text((110, 33), "FOOTARENA • SPORTS TURF DISCOVERY & RESERVATION SYSTEM", fill="#ECFDF5", font=font_mono)

    # Left Card: Arena Spotlight with Turf Field Graphic
    left_x = 45
    left_y = 90
    draw.rounded_rectangle([left_x, left_y, left_x + 440, left_y + 475], radius=22, fill="#0F241C", outline="#1F4D3C", width=2)
    
    # Styled Turf Field graphic
    turf_box = Image.new("RGBA", (400, 250), (19, 46, 36, 255))
    t_draw = ImageDraw.Draw(turf_box)
    # Field border & center circle
    t_draw.rectangle([20, 20, 380, 230], outline=(255, 255, 255, 200), width=3)
    t_draw.line([200, 20, 200, 230], fill=(255, 255, 255, 200), width=2)
    t_draw.ellipse([160, 85, 240, 165], outline=(255, 255, 255, 200), width=2)
    t_draw.ellipse([197, 122, 203, 128], fill=(255, 255, 255, 200))
    # Penalty boxes
    t_draw.rectangle([20, 60, 80, 190], outline=(255, 255, 255, 180), width=2)
    t_draw.rectangle([320, 60, 380, 190], outline=(255, 255, 255, 180), width=2)
    img.paste(turf_box, (left_x + 20, left_y + 20))

    # Arena Details under turf
    draw.text((left_x + 25, left_y + 290), "Calicut Premium FIFA Turf", fill="#FFFFFF", font=font_title)
    draw.text((left_x + 25, left_y + 330), "7-a-Side & 5-a-Side Synthetic Grass • Floodlit", fill="#A7F3D0", font=font_small)
    draw.text((left_x + 25, left_y + 360), "Hourly Rate: ₹1,200 / hr • Rating: 4.9 / 5.0 (140+ reviews)", fill="#FDE047", font=font_small)

    # Postgres Transaction Lock Pill
    draw.rounded_rectangle([left_x + 20, left_y + 400, left_x + 420, left_y + 445], radius=14, fill="#132E24", outline="#1F4D3C", width=1)
    draw.text((left_x + 35, left_y + 415), "POSTGRESQL TRANSACTION LOCK: ACTIVE", fill="#B8FF3D", font=font_mono)

    # Right Card: Hourly Slot Booking Grid
    right_x = 515
    right_y = 90
    draw.rounded_rectangle([right_x, right_y, right_x + 400, right_y + 475], radius=22, fill="#0F241C", outline="#1F4D3C", width=2)
    
    draw.text((right_x + 25, right_y + 25), "AVAILABLE TIME SLOTS", fill="#6EE7B7", font=font_tiny)
    draw.text((right_x + 25, right_y + 48), "Select Playing Slot", fill="#FFFFFF", font=font_title)
    draw.text((right_x + 25, right_y + 85), "Date: Today • Live Conflict Prevention", fill="#A7F3D0", font=font_small)

    slots = [
        ("17:00 - 18:00", "BOOKED", "#EF4444", "#371B1B"),
        ("18:00 - 19:00", "SELECTED", "#10B981", "#064E3B"),
        ("19:00 - 20:00", "AVAILABLE", "#10B981", "#132E24"),
        ("20:00 - 21:00", "BOOKED", "#EF4444", "#371B1B"),
        ("21:00 - 22:00", "AVAILABLE", "#10B981", "#132E24"),
    ]

    slot_y = right_y + 120
    for time_str, status_str, text_col, bg_col in slots:
        draw.rounded_rectangle([right_x + 25, slot_y, right_x + 375, slot_y + 45], radius=12, fill=bg_col, outline=text_col, width=1)
        draw.text((right_x + 40, slot_y + 13), time_str, fill="#FFFFFF", font=font_mono)
        draw.text((right_x + 280, slot_y + 14), status_str, fill=text_col, font=font_tiny)
        slot_y += 55

    # Booking CTA button preview
    draw.rounded_rectangle([right_x + 25, right_y + 405, right_x + 375, right_y + 455], radius=25, fill="#10B981")
    draw.text((right_x + 110, right_y + 420), "CONFIRM & LOCK SLOT →", fill="#064E3B", font=font_mono)

    out_file = os.path.join(OUTPUT_DIR, "footarena.png")
    img.save(out_file, "PNG", quality=95)
    print(f"Saved: {out_file}")

# -------------------------------------------------------------
# 6. Quiz Application (quiz-app.png)
# -------------------------------------------------------------
def make_quiz_app():
    img = Image.new("RGB", (WIDTH, HEIGHT), "#1E1B4B")
    draw = ImageDraw.Draw(img)

    # Indigo/Purple gradient glow
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse([WIDTH//2 - 250, HEIGHT//2 - 150, WIDTH//2 + 250, HEIGHT//2 + 250], fill=(99, 102, 241, 45))
    glow_draw.ellipse([200, 300, 600, 600], fill=(168, 85, 247, 35))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    img.paste(glow, (0, 0), glow)
    draw = ImageDraw.Draw(img)

    # Top Header
    draw.rounded_rectangle([30, 20, WIDTH - 30, 65], radius=14, fill="#2E2A72", outline="#4338CA", width=1)
    draw.ellipse([45, 38, 55, 48], fill="#EF4444")
    draw.ellipse([62, 38, 72, 48], fill="#F59E0B")
    draw.ellipse([79, 38, 89, 48], fill="#10B981")
    draw.text((110, 33), "ENTERPRISE ASSESSMENT ENGINE • SPRING BOOT REST & ANGULAR", fill="#EEF2FF", font=font_mono)

    # Main Quiz Question Area
    left_x = 45
    left_y = 90
    draw.rounded_rectangle([left_x, left_y, left_x + 550, left_y + 475], radius=22, fill="#25215A", outline="#4338CA", width=2)
    
    # Question Header Bar with Timer
    draw.text((left_x + 30, left_y + 25), "QUESTION 07 OF 25 • ADVANCED DATA STRUCTURES", fill="#A5B4FC", font=font_tiny)
    draw.text((left_x + 30, left_y + 55), "What is the worst-case search complexity", fill="#FFFFFF", font=font_subtitle)
    draw.text((left_x + 30, left_y + 80), "in a balanced Binary Search Tree (AVL / Red-Black)?", fill="#FFFFFF", font=font_subtitle)

    # Multiple Choice Options
    options = [
        ("A", "O(1) Constant Time", False),
        ("B", "O(log n) Logarithmic Time", True),
        ("C", "O(n) Linear Time", False),
        ("D", "O(n log n) Linearithmic Time", False),
    ]

    opt_y = left_y + 145
    for letter, text_str, is_selected in options:
        bg_col = "#4338CA" if is_selected else "#1E1B4B"
        border_col = "#818CF8" if is_selected else "#3730A3"
        draw.rounded_rectangle([left_x + 30, opt_y, left_x + 520, opt_y + 52], radius=14, fill=bg_col, outline=border_col, width=2 if is_selected else 1)
        # Letter pill
        draw.rounded_rectangle([left_x + 45, opt_y + 11, left_x + 75, opt_y + 41], radius=8, fill="#6366F1" if is_selected else "#312E81")
        draw.text((left_x + 54, opt_y + 18), letter, fill="#FFFFFF", font=font_mono)
        draw.text((left_x + 90, opt_y + 17), text_str, fill="#FFFFFF" if is_selected else "#E0E7FF", font=font_small)
        opt_y += 65

    # Bottom Actions
    draw.rounded_rectangle([left_x + 30, left_y + 415, left_x + 180, left_y + 455], radius=20, fill="#3730A3")
    draw.text((left_x + 55, left_y + 426), "← PREVIOUS", fill="#E0E7FF", font=font_tiny)

    draw.rounded_rectangle([left_x + 370, left_y + 415, left_x + 520, left_y + 455], radius=20, fill="#6366F1")
    draw.text((left_x + 400, left_y + 426), "SAVE & NEXT →", fill="#FFFFFF", font=font_tiny)

    # Right Container: Timer & Question Palette
    right_x = 625
    right_y = 90
    draw.rounded_rectangle([right_x, right_y, right_x + 290, right_y + 475], radius=22, fill="#25215A", outline="#4338CA", width=2)
    
    # Countdown Timer Card
    draw.rounded_rectangle([right_x + 20, right_y + 20, right_x + 270, right_y + 105], radius=16, fill="#1E1B4B", outline="#4F46E5", width=1)
    draw.text((right_x + 35, right_y + 35), "TIME REMAINING", fill="#A5B4FC", font=font_tiny)
    draw.text((right_x + 35, right_y + 55), "14 : 32", fill="#F43F5E", font=font_title)
    draw.text((right_x + 155, right_y + 65), "Auto-Submit Active", fill="#94A3B8", font=font_tiny)

    # Question Palette Grid
    draw.text((right_x + 25, right_y + 130), "QUESTION PALETTE", fill="#C7D2FE", font=font_tiny)
    
    # 5x4 Grid of numbers
    grid_start_x = right_x + 25
    grid_start_y = right_y + 160
    q_num = 1
    for r in range(4):
        for c in range(5):
            x1 = grid_start_x + c * 48
            y1 = grid_start_y + r * 45
            is_done = q_num < 7
            is_current = q_num == 7
            col_fill = "#10B981" if is_done else ("#6366F1" if is_current else "#1E1B4B")
            draw.rounded_rectangle([x1, y1, x1 + 40, y1 + 38], radius=8, fill=col_fill, outline="#4F46E5", width=1)
            draw.text((x1 + (15 if q_num < 10 else 10), y1 + 10), str(q_num), fill="#FFFFFF", font=font_tiny)
            q_num += 1

    # Spring Boot backend pill
    draw.rounded_rectangle([right_x + 20, right_y + 370, right_x + 270, right_y + 445], radius=14, fill="#1E1B4B", outline="#4338CA", width=1)
    draw.text((right_x + 30, right_y + 385), "SPRING BOOT SECURE API", fill="#818CF8", font=font_tiny)
    draw.text((right_x + 30, right_y + 405), "• Synchronized Server Timer", fill="#E0E7FF", font=font_small)
    draw.text((right_x + 30, right_y + 425), "• PostgreSQL ACID Answer Log", fill="#A5B4FC", font=font_small)

    out_file = os.path.join(OUTPUT_DIR, "quiz-app.png")
    img.save(out_file, "PNG", quality=95)
    print(f"Saved: {out_file}")

if __name__ == "__main__":
    make_ai_digital_human()
    make_goia_chatbot()
    make_potato_disease()
    make_sports_celebrity()
    make_footarena()
    make_quiz_app()
    print("All 6 project images generated successfully!")
