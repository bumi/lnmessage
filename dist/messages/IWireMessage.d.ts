/// <reference types="node" />
import { MessageType } from '../types';
export interface IWireMessage {
    type: MessageType;
    serialize(): Buffer;
}
