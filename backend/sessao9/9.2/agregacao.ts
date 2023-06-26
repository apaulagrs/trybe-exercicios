class Friend {
  private nickname:string = '';

  public getNickname():string { return this.nickname; }
  public setNickname(nickname:string) { this.nickname = nickname; }
}

class SocialMediaAccount {
  private friends = new Array<Friend>();

  public addFriend(friend:Friend) {
    this.friends.push(friend);
  }

  public printFriends() {
    this.friends.map((f) => console.log(f));
  }
}

const social = new SocialMediaAccount();

const friendJennifer = new Friend();
friendJennifer.setNickname('jennifer_goncalves');

const friendGabriella = new Friend();
friendGabriella.setNickname('_gabirneto');

social.addFriend(friendJennifer);
social.addFriend(friendGabriella);
social.printFriends();