export function suppressTextureErrors() {
  if (typeof window === 'undefined') return;

  const originalError = console.error;

  console.error = (...args) => {
    const message = args[0];
    const fullMessage = args.join(' ');
    
    if (
      (typeof message === 'string' && (
        message.includes('THREE.GLTFLoader') && message.includes('Couldn\'t load texture') ||
        message.includes('GLTFLoader') && message.includes('texture')
      )) ||
      (typeof fullMessage === 'string' && (
        fullMessage.includes('THREE.GLTFLoader') && fullMessage.includes('texture') ||
        fullMessage.includes('GLTFLoader') && fullMessage.includes('texture')
      ))
    ) {
      return;
    }
    
    originalError.apply(console, args);
  };

  return () => {
    console.error = originalError;
  };
}

