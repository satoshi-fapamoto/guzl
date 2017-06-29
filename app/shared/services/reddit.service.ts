import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class RedditService {
	constructor(
		private http: Http
	) { }

	getDetailedRedditPost(permalink) {
		return this.http.get('https://www.reddit.com'+permalink+'.json')
			.map((res: Response) => res.json());
	}

	getRealGirlsPosts() {
		return this.http.get(`https://www.reddit.com/r/RealGirls/.json`)
			.map((res: Response) => res.json());
	}

}