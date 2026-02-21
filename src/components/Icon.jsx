// Icon component using SVG icons
const icons = {
  linux: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.28.429-.435.896-.612 1.31-.199.464-.453.893-.755 1.27-.277.345-.607.607-.972.792.347.355.618.737.829 1.162.198.396.306.826.325 1.272.015.488-.03.972-.138 1.428-.12.544-.34 1.036-.636 1.466a2.449 2.449 0 01-1.154.931 2.953 2.953 0 01-1.532.222 2.522 2.522 0 01-1.372-.422 2.487 2.487 0 01-.87-1.098 6.37 6.37 0 01-.398-1.448c-.06-.465-.083-.919-.067-1.35.026-.646.12-1.28.272-1.886.146-.579.393-1.096.706-1.545.323-.463.736-.823 1.203-1.068a.944.944 0 01.703-.136 2.61 2.61 0 001.45-.609c.383-.264.653-.641.802-1.118.155-.496.132-.966.132-1.469v-.222c-.025-.949-.107-1.873-.252-2.74-.12-.751-.255-1.517-.497-2.17-.501-1.35-1.168-2.443-2.003-3.272-.879-.838-1.882-1.38-2.963-1.734a7.556 7.556 0 00-1.228-.302c.36-.862.986-1.558 1.875-2.045.72-.393 1.527-.59 2.352-.59 1.378 0 2.568.566 3.414 1.547.838-.326 1.737-.503 2.678-.503.976 0 1.837.175 2.602.5.848.362 1.576.877 2.17 1.546.597-.671 1.324-1.172 2.17-1.546.765-.325 1.626-.5 2.602-.5.941 0 1.84.177 2.678.503.846-.98 2.036-1.547 3.414-1.547.825 0 1.632.197 2.352.59.889.487 1.515 1.183 1.875 2.045a7.556 7.556 0 01-1.228.302c-1.08.354-2.084.896-2.963 1.734-.835.83-1.502 1.923-2.003 3.272-.242.653-.377 1.419-.497 2.17-.145.867-.227 1.79-.252 2.74v.222c0 .503-.023.973.132 1.469.149.477.42.854.802 1.118a2.61 2.61 0 001.45.609.944.944 0 01.703.136c.467.245.88.605 1.203 1.068.313.449.56.966.706 1.545.152.606.298 1.24.272 1.886-.016.431-.007.885-.067 1.35-.038.465-.132.932-.398 1.448a2.487 2.487 0 01-.87 1.098 2.522 2.522 0 01-1.372.422 2.953 2.953 0 01-1.532-.222 2.449 2.449 0 01-1.154-.931c-.296-.43-.516-.922-.636-1.466a2.724 2.724 0 01-.138-1.428c.019-.446.127-.876.325-1.272.211-.425.482-.807.829-1.162-.365-.185-.695-.447-.972-.792-.302-.377-.556-.806-.755-1.27-.177-.414-.332-.881-.612-1.31a.424.424 0 00-.11-.135c.123-.805-.01-1.657-.288-2.489-.588-1.77-1.83-3.47-2.715-4.521-.751-1.067-.974-1.928-1.05-3.02-.065-1.49 1.056-5.964-3.17-6.298-.165-.013-.325-.021-.48-.021z"/>
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <circle cx="12" cy="12" r="2"/>
      <circle cx="12" cy="5" r="2"/>
      <circle cx="5" cy="19" r="2"/>
      <circle cx="19" cy="19" r="2"/>
      <line x1="12" y1="7" x2="12" y2="10"/>
      <line x1="7" y1="12" x2="5" y2="17"/>
      <line x1="17" y1="12" x2="19" y2="17"/>
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/>
      <line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/>
      <line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/>
      <line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/>
      <line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  ),
  flag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
      <line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  bug: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <rect x="8" y="6" width="8" height="12" rx="4"/>
      <path d="M5 8v2a7 7 0 0 0 14 0V8"/>
      <line x1="9" y1="10" x2="9" y2="10.01"/>
      <line x1="15" y1="10" x2="15" y2="10.01"/>
      <line x1="8" y1="6" x2="5" y2="4"/>
      <line x1="16" y1="6" x2="19" y2="4"/>
    </svg>
  ),
  crosshair: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <circle cx="12" cy="12" r="10"/>
      <line x1="22" y1="12" x2="18" y2="12"/>
      <line x1="6" y1="12" x2="2" y2="12"/>
      <line x1="12" y1="6" x2="12" y2="2"/>
      <line x1="12" y1="22" x2="12" y2="18"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <polyline points="4 17 10 11 4 5"/>
      <line x1="12" y1="19" x2="20" y2="19"/>
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  folder: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="icon">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
  ),
}

export default function Icon({ name, className }) {
  return (
    <span className={`icon-wrapper ${className || ''}`}>
      {icons[name] || icons.folder}
    </span>
  )
}
