import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Lesson } from '../schedule/types';

@Component({
  selector: 'app-lesson-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lesson-form.component.html'
})
export class LessonFormComponent {
  @Input() lesson: Lesson | null = null;
  @Output() save = new EventEmitter<Lesson>();
  @Output() cancel = new EventEmitter<void>();

  model: Lesson = {
    type: 'в аудитории',
    teacher: '',
    auditorium: '',
    school: '',
    address: '',
    class: '',
    day: '',
    start: '',
    end: '',
    course: ''
  };

  ngOnInit() {
    if (this.lesson) this.model = { ...this.lesson };
  }

  submit() {
    this.save.emit(this.model);
  }

  doCancel() {
    this.cancel.emit();
  }
}
