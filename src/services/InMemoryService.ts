import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemHeroService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: '1', name: 'Windstorm' },
            { id: '2', name: 'Bombasto' },
            { id: '3', name: 'Magneta' },
            { id: '4', name: 'Tornado' }
        ];

        let hello = [
            { id: '1', message: 'Hello from', name: 'Angular-InMemoryApi' }
        ]
        return { heroes, hello };
    }
}