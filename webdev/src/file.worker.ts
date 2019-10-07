import SafeEmitter from "./SafeEmitter";
import { EventEmitter } from "events";

type Message = string
type ThreadID = number
type UserID = number
type Participants = UserID[]
type Commands = {
  sendMessageToTHread: [ThreadID, Message]
  createThread: [Participants]
  addUserToThread: [ThreadID, UserID]
  removeUserFromThread: [ThreadID, UserID]
}

type Events = {
  receivedMessage: [ThreadID, UserID, Message]
  createdThread: [ThreadID, Participants]
  addedUserToThread: [ThreadID, UserID]
  removedUserFromThread: [ThreadID, UserID]
}

let commandEmitter = new SafeEmitter<Commands>();
let eventEmitter = new SafeEmitter<Events>()

onmessage = command => {
  commandEmitter.emit(
    command.data.type,
    ...command.data.data
  )
}

eventEmitter.on('receivedMessage', data => {
  postMessage({type: 'receivedMessage', data});
});

eventEmitter.on('createdThread', data => {
  postMessage({type: 'createdThread', data});
})

commandEmitter.on('sendMessageToThread', (threadID, message) => {
  console.log('OK', `I will send a message to threadID ${threadID}`);
});

eventEmitter.emit('createdThread', 123, [456, 789]);

