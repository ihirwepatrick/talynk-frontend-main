const Colors = {
  // Primary brand colors
  primary: {
    main: '#0EA5E9', // sky-500
    light: '#7DD3FC', // sky-300
    dark: '#0369A1',  // sky-700
  },

  // Background colors
  background: {
    primary: '#101113',   // black
    secondary: '#18181B', // zinc-900
    tertiary: '#1E1E1E',  // zinc-800
  },

  // Text colors
  text: {
    primary: '#FFFFFF',   // white
    secondary: '#9CA3AF', // gray-400
    tertiary: '#6B7280',  // gray-500
    disabled: '#4B5563',  // gray-600
  },

  // Status colors
  status: {
    success: '#22C55E', // green-500
    error: '#EF4444',   // red-500
    warning: '#F59E0B', // amber-500
    info: '#3B82F6',    // blue-500
  },

  // Border colors
  border: {
    light: '#3F3F46',   // zinc-700
    default: '#27272A',  // zinc-800
    dark: '#18181B',    // zinc-900
  },

  // Button colors
  button: {
    primary: '#0EA5E9',  // sky-500
    secondary: '#27272A', // zinc-800
    disabled: '#3F3F46',  // zinc-700
  },

  // Overlay colors
  overlay: {
    light: 'rgba(0, 0, 0, 0.3)',
    medium: 'rgba(0, 0, 0, 0.5)',
    dark: 'rgba(0, 0, 0, 0.7)',
  }
} as const;

export default Colors; 