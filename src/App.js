class App {
  async run() {
    const visitDate = await InputView.readDate();
    const order = await InputView.readMenu();
  }
}

export default App;
