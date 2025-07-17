import { Component, OnInit } from '@angular/core';
import { AiService } from '../../services/ai';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-chatbot',
  standalone: false,  
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css']
})
export class ChatbotComponent implements OnInit {
  userMessage = '';
  chatHistory: { sender: string, text: string }[] = [];

  constructor(private ai: AiService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('✅ ChatbotComponent loaded');
  }

  sendMessage() {
  if (!this.userMessage.trim()) return;

  this.chatHistory.push({ sender: 'user', text: this.userMessage });

  this.ai.askAI(this.userMessage).subscribe(res => {
    this.chatHistory.push({ sender: 'bot', text: res.response });
    this.cd.detectChanges();  // ✅ force Angular to update UI immediately
  });

  this.userMessage = '';
}


}
