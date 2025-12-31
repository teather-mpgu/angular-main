import { Injectable } from '@angular/core';
import { Lesson } from '../schedule/types';

@Injectable({ providedIn: 'root' })
export class LessonService {
  private readonly storageKey = 'scheduleapp.lessons';

  // Получить все занятия
  getLessons(): Lesson[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  // Сохранить или обновить занятие
  saveLesson(lesson: Lesson): void {
    const lessons = this.getLessons();
    
    if (lesson.id) {
      // Обновление существующего
      const idx = lessons.findIndex(l => l.id === lesson.id);
      if (idx >= 0) lessons[idx] = lesson;
    } else {
      // Добавление нового
      lesson.id = Date.now().toString();
      lessons.push(lesson);
    }
    
    localStorage.setItem(this.storageKey, JSON.stringify(lessons));
  }

  // Удалить занятие
  deleteLesson(id: string): void {
    let lessons = this.getLessons();
    lessons = lessons.filter(l => l.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(lessons));
  }

  // Очистить все занятия (опционально)
  clearAll(): void {
    localStorage.removeItem(this.storageKey);
  }
}
