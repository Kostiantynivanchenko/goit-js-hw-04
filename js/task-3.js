const profile = {
  username: 'Jacob',
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};
console.log(profile.getInfo()); // "Jacob має 300 активних годин!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco має 300 активних годин!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco має 320 активних годин!"
