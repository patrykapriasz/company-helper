import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

export class SocketService {

  socket;

  constructor() {   }

  setupSocketConnection() {
    this.socket = io(environment.apiUrl,{
      transports: ['websocket'],
      timeout: 6000,
      secure: false
    });
  }


}
