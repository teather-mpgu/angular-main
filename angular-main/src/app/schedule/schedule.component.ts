import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonFormComponent } from '../lesson-form/lesson-form.component';
import { LessonService } from '../services/lesson.service';
import { Lesson } from './types';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, LessonFormComponent],
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent {
  lessons: Lesson[] = [];
  showForm = false;
  editing: Lesson | null = null;

  constructor(private lessonService: LessonService) {}

  ngOnInit() {
    this.loadLessons();
  }

  loadLessons() {
    this.lessons = this.lessonService.getLessons();
  }

  toggleForm() {
    this.editing = null;
    this.showForm = !this.showForm;
  }

  addOrUpdate(lesson: Lesson) {
    this.lessonService.saveLesson(lesson);
    this.loadLessons(); // Перезагружаем список
    this.showForm = false;
  }

  edit(lesson: Lesson) {
    this.editing = { ...lesson };
    this.showForm = true;
  }

  remove(id?: string) {
    if (!id) return;
    if (!confirm('Удалить занятие?')) return;
    this.lessonService.deleteLesson(id);
    this.loadLessons(); // Перезагружаем список
  }
}