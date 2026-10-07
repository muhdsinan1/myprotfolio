import React from 'react';

export function PythonIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M11.914 0C5.833 0 6.2 2.64 6.2 2.64l.006 2.732h5.787v.82H3.84s-3.84.435-3.84 6.264c0 5.83 3.35 5.626 3.35 5.626h2.002v-2.805s-.108-3.35 3.284-3.35h5.637s3.167.05 3.167-3.078V3.078S18.006 0 11.914 0zm-3.23 1.777c.602 0 1.09.488 1.09 1.09a1.09 1.09 0 0 1-1.09 1.09 1.09 1.09 0 0 1-1.09-1.09c0-.602.488-1.09 1.09-1.09zm3.4 22.223c6.082 0 5.715-2.64 5.715-2.64l-.006-2.732H12.006v-.82h8.153s3.84-.435 3.84-6.264c0-5.83-3.35-5.626-3.35-5.626h-2.002v2.805s.108 3.35-3.284 3.35H9.726s-3.167-.05-3.167 3.078v5.772S5.994 24 12.086 24zm3.23-1.777a1.09 1.09 0 0 1-1.09-1.09c0-.602.488-1.09 1.09-1.09.602 0 1.09.488 1.09 1.09 0 .602-.488 1.09-1.09 1.09z" />
    </svg>
  );
}

export function JavaScriptIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.892-1.776-2.316-2.364l-.626-.263c-.87-.367-1.222-.686-1.222-1.218 0-.585.457-.98 1.258-.98.784 0 1.222.368 1.488 1.03l2.02-.843c-.477-1.328-1.636-2.05-3.508-2.05-2.146 0-3.524 1.298-3.524 3.064 0 1.63 1.037 2.457 2.666 3.125l.626.255c1.074.453 1.436.843 1.436 1.465 0 .69-.691 1.137-1.66 1.137-1.353 0-1.872-.73-2.19-1.61l-2.064.834c.542 1.54 1.765 2.64 4.254 2.64 2.508 0 3.864-1.353 3.864-3.236zm-8.825.21v-6.66h-2.348v6.782c0 1.706-.826 2.37-2.094 2.37-.585 0-1.074-.107-1.393-.264l-.393 1.956c.552.264 1.34.39 2.21.39 2.552 0 4.02-1.465 4.02-4.574z" />
    </svg>
  );
}

export function HtmlIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.234-2.625h11.086l.235-2.625H5.438l.703 7.875h9.328l-.328 3.563-3.164.843-3.164-.843-.211-2.344H6.07l.398 4.453 5.508 1.5 5.508-1.5.773-8.297H8.531z" />
    </svg>
  );
}

export function CssIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.5H5.41l.234 2.625h11.695l-.258 2.625H6.102l.234 2.625h10.828l-.75 8.156-4.437 1.219-4.438-1.219-.281-3.281H4.602l.539 6.094 6.836 1.875 6.836-1.875.922-10.281.258-2.625.258-2.625.339-3.313z" />
    </svg>
  );
}

export function ReactIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <ellipse cx="12" cy="12" rx="4.5" ry="11" transform="rotate(30 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="4.5" ry="11" transform="rotate(90 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="4.5" ry="11" transform="rotate(150 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.2" />
    </svg>
  );
}

export function AngularIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 0L1.75 3.65 3.32 17.5 12 24l8.68-6.5L22.25 3.65 12 0zm0 3.73l5.88 12.87h-2.18l-1.24-3.13H9.54l-1.24 3.13H6.12L12 3.73zm1.69 7.74L12 7.55l-1.69 3.92h3.38z" />
    </svg>
  );
}

export function JavaIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M8.847 17.653c-.313-.028-1.57.171-1.397.745.228.756 2.057.656 2.377.622 1.309-.138 2.637-.417 3.939-.672.482-.094 1.346-.228 1.488-.707.153-.518-.636-.713-1.077-.732-1.745-.075-3.567.801-5.33.744zm7.394 2.195c-1.58.541-3.321.753-4.991.737-1.423-.014-2.859-.228-4.24-.627-.247-.071-.787-.205-.905.109-.126.335.321.503.541.577 1.637.551 3.385.767 5.114.737 1.57-.028 3.149-.286 4.67-.714.288-.081.766-.215.655-.589-.107-.361-.557-.306-.844-.23zm-5.18-8.219c.783.741 1.684 1.464 2.138 2.453.64 1.396.34 2.894-.482 4.144-.148.225-.331.429-.44.674-.183.411.086.721.468.613.518-.146.974-.467 1.365-.815 1.439-1.282 1.839-3.262 1.059-5.011-.649-1.455-1.854-2.584-2.883-3.791-.257-.302-.519-.607-.733-.938-.415-.642-.259-.93.382-.771 1.706.422 3.238 1.442 4.17 2.912.871 1.373 1.139 3.064.678 4.629-.407 1.385-1.328 2.548-2.48 3.409-.817.611-1.769 1.063-2.775 1.285-.812.179-1.674.225-2.489.043-1.077-.24-2.036-.889-2.709-1.761-.837-1.085-1.127-2.529-.757-3.857.373-1.339 1.332-2.428 2.378-3.324 1.025-.878 2.115-1.71 3.089-2.656-.001.002.001.002 0 .002z" />
    </svg>
  );
}

export function SpringBootIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 2L3 7.2v10.4L12 23l9-5.4V7.2L12 2zm-1.2 16.4l-5.6-3.3V9.7l5.6 3.3v5.4zm2.4 0v-5.4l5.6-3.3v5.4l-5.6 3.3zM12 11.2L6.4 7.9 12 4.6l5.6 3.3-5.6 3.3z" />
    </svg>
  );
}

export function DjangoIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M11.146 0h3.924v17.514c-1.309.243-2.316.324-3.35.324-3.593 0-5.467-1.46-5.467-4.274 0-2.894 2.029-4.57 5.223-4.57.513 0 .947.054 1.298.135V4.654h-1.63c-3.111 0-4.898 1.407-4.898 3.84v.054H2.433v-.108C2.433 4.222 5.031 0 11.146 0zm0 11.413c-.324-.081-.676-.108-1.055-.108-1.542 0-2.435.811-2.435 2.137 0 1.352.893 2.137 2.408 2.137.351 0 .73-.027 1.082-.081v-4.085zM17.828 4.79h3.76v12.723h-3.76V4.79zm0-4.79h3.76v3.218h-3.76V0z" />
    </svg>
  );
}

export function FastApiIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.09 17.556l-1.91-4.887h3.182L10.91 6.444l1.91 4.889H9.638l3.452 6.223z" />
    </svg>
  );
}

export function FlaskIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M19.78 17.75L14 7.69V3h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2h1v4.69L4.22 17.75A4 4 0 0 0 7.66 23h8.68a4 4 0 0 0 3.44-5.25zM12 9.42l4.89 8.58H7.11L12 9.42z" />
    </svg>
  );
}

export function SqlIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 2s-3.58 2-8 2-8-1.34-8-2 3.58-2 8-2zm8 8c0 .66-3.58 2-8 2s-8-1.34-8-2v-2.17c1.78 1.32 4.73 2.17 8 2.17s6.22-.85 8-2.17V12zm0 6c0 .66-3.58 2-8 2s-8-1.34-8-2v-2.17c1.78 1.32 4.73 2.17 8 2.17s6.22-.85 8-2.17V18z" />
    </svg>
  );
}

export function PostgresIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 2C6.48 2 2 5.58 2 10c0 3.12 2.21 5.83 5.42 7.04L7 22l4.25-2.12c.25.04.5.08.75.08 5.52 0 10-3.58 10-8s-4.48-8-10-8zm-1.5 12.5H8.75V7.25h1.75v7.25zm4.5 0h-1.75V7.25H15v7.25z" />
    </svg>
  );
}

export function MySqlIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M16.5 6a4.5 4.5 0 0 0-4.5 4.5V18h3v-7.5a1.5 1.5 0 0 1 3 0V18h3v-7.5A4.5 4.5 0 0 0 16.5 6zm-9 0A4.5 4.5 0 0 0 3 10.5V18h3v-7.5a1.5 1.5 0 0 1 3 0V18h3v-7.5A4.5 4.5 0 0 0 7.5 6z" />
    </svg>
  );
}

export function TensorFlowIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.525l-6.153 3.565V5.856zm21.416 0L12.46 0v24l4.095-2.378V7.525l6.153 3.565V5.856z" />
    </svg>
  );
}

export function KerasIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M0 0h24v24H0V0zm17.5 18l-5.3-7 4.9-5h-3.4l-4.4 4.5V6H7v12h2.3v-4.3l4.6 4.3h3.6z" />
    </svg>
  );
}

export function ScikitLearnIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <circle cx="6" cy="18" r="3.5" />
      <circle cx="18" cy="18" r="3.5" />
      <circle cx="12" cy="6" r="3.5" />
      <path d="M8.5 16l4.5-7.5 4.5 7.5z" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function OpenCvIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <circle cx="12" cy="6" r="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="6" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="18" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 2a4 4 0 0 1 4 4M2 16a4 4 0 0 1 4-4M22 16a4 4 0 0 1-4-4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function PandasIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function NumPyIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 8.5L4.5 7 12 3.2 19.5 7 12 10.5zM2 17l10 5 10-5v-4l-10 5-10-5v4zm0-5l10 5 10-5V8l-10 5-10-5v4z" />
    </svg>
  );
}

export function DockerIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 00.186-.186V3.576a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.886c0 .102.083.186.185.186zm0 2.715h2.118a.186.186 0 00.186-.186V6.29a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.083.186.185.186zm-2.954 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.186H8.075a.185.185 0 00-.185.186v1.887c0 .102.083.186.185.186zm0 2.715h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.075a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm18.814 1.408c-.378-.26-1.57-.463-2.556-.37-1.12.106-2.093.593-2.612 1.39-.427-.083-.88-.13-1.343-.13H2.072c-.528 0-.963.426-.963.954 0 1.945.694 4.546 2.5 6.223C5.58 23.23 8.352 24 12.008 24c5.852 0 10.667-3.158 11.89-8.49.02-.083.028-.158.028-.241 0-.676-.482-1.25-1.157-1.498z" />
    </svg>
  );
}

export function GitIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.121 0L8.831 2.568l2.678 2.679a2.5 2.5 0 0 1 3.167 3.178l2.568 2.568a2.5 2.5 0 1 1-1.414 1.414l-2.39-2.39a2.5 2.5 0 0 1-2.94-2.88L8.03 4.667l-7.58 7.58a1.5 1.5 0 0 0 0 2.121l10.479 10.479a1.5 1.5 0 0 0 2.121 0l10.479-10.48a1.5 1.5 0 0 0 0-2.121v.002zM15 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}

export function GitHubIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function DrfIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
      <path d="M11.146 0h3.924v17.514c-1.309.243-2.316.324-3.35.324-3.593 0-5.467-1.46-5.467-4.274 0-2.894 2.029-4.57 5.223-4.57.513 0 .947.054 1.298.135V4.654h-1.63c-3.111 0-4.898 1.407-4.898 3.84v.054H2.433v-.108C2.433 4.222 5.031 0 11.146 0zm0 11.413c-.324-.081-.676-.108-1.055-.108-1.542 0-2.435.811-2.435 2.137 0 1.352.893 2.137 2.408 2.137.351 0 .73-.027 1.082-.081v-4.085zM17.828 4.79h3.76v12.723h-3.76V4.79zm0-4.79h3.76v3.218h-3.76V0z" />
    </svg>
  );
}

