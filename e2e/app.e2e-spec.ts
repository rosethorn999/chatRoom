import { ChatRoomPage } from './app.po';

describe('chat-room App', () => {
  let page: ChatRoomPage;

  beforeEach(() => {
    page = new ChatRoomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
