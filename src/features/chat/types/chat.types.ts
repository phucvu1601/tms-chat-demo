import { FieldValue, Timestamp } from "firebase/firestore";

export type RoomType = "private" | "group";

export type ParticipantPreview = {
  name: string | null;
  avatar: string | null;
};
export type ParticipantsInfo = Record<string, ParticipantPreview>;

export type MessageType = "text" | "image" | "file" | "system";
export interface LastMessage {
  text: string;
  senderId: string;
  senderName: string;
  createdAt: Timestamp | FieldValue;
  type: MessageType;
}

export type ChatRoom = {
  id: string;
  type: RoomType;
  participants: string[];
  participantsInfo: ParticipantsInfo;
  participantsCount: number;
  createdAt: Timestamp | FieldValue;
  lastMessage: LastMessage;
  lastMessageAt: Timestamp | FieldValue;
};

export interface Message {
  id: string;
  senderId: string;
  text: string;
  type: MessageType;
  createdAt: Timestamp | FieldValue;
}
