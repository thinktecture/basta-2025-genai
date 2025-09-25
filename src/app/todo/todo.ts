import { Component, OnInit, signal } from '@angular/core';
import { ChatCompletionMessageParam, CreateMLCEngine, MLCEngine } from '@mlc-ai/web-llm';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { TodoDto } from './todo.dto';

@Component({
  selector: 'app-todo',
  imports: [
    MatSelectionList,
    MatListOption,
    MatProgressBar,
    MatButton,
    MatIcon,
    MatFormField,
    MatInput,
    MatInputModule,
    MatFabButton,
  ],
  templateUrl: './todo.html',
  styleUrl: './todo.scss'
})
export class Todo implements OnInit {
  // LAB #2, #3, #5

  async ngOnInit() {
    // LAB #2
  }

  async runPrompt(userPrompt: string, languageModel: string) {
    // LAB #3
  }

  async* inferWebLLM(userPrompt: string): AsyncGenerator<string> {
    // LAB #3, #7, #8, #9
  }

  async* inferPromptApi(userPrompt: string) {
    // LAB #12
  }

  addTodo() {
    // LAB #5
  }
}
