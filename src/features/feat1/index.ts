export function configure(config) {
  config.postTask(() => {
     console.log('My brand new feature is live and kicking!');
  });
}
