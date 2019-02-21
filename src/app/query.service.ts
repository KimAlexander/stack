import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class FetchData {
  private API_URL = 'http://api.stackexchange.com';

  constructor(private http: HttpClient) {
  }

  getData(query: string) {
    return this.http
      .get(`${this.API_URL}/2.2/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`)
  }

  getAuthorPopularQuestions(userId: string) {
    return this.http
      .get(`${this.API_URL}/2.2/users/${userId}/questions?order=desc&sort=votes&site=stackoverflow`);
  }

  getAnswers(question_id: string) {
    return this.http
      .get(`${this.API_URL}/2.2/questions/${question_id}/answers?order=desc&sort=activity&site=stackoverflow`);
  }

  getPopularByTag(tag: string) {
    return this.http
      .get(`${this.API_URL}/2.2/tags/${tag}/faq?site=stackoverflow`);
  }

  login(credentials: {}) {
    return this.http.post<any>('http://localhost:3000/api/login', credentials)
  }

  register(credentials: {}) {
    return this.http.post<any>('http://localhost:3000/api/register', credentials)
  }
}
