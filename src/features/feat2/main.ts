export function configure(config) {
  config.postTask(() => {
     console.log('Feature 2 is live and kicking too!');
  });
}
