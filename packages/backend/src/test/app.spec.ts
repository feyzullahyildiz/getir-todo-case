import { app } from '../app';
import request from 'supertest';
import { Todo } from '../db';
describe('Test App', () => {
    it('should get todos', async () => {
        const spy = spyOn(Todo, 'find').and.returnValue(Promise.resolve([]));
        const response = await request(app).get('/api');
        expect(response.body).toHaveLength(0);
        expect(spy).toBeCalledWith({});
        expect(spy).toBeCalledTimes(1);
    });
    it('should create todo', async () => {
        const spy = spyOn(Todo.prototype, 'save');
        await request(app).post('/api').send({ name: 'foobar' });
        expect(spy).toBeCalledTimes(1);
    });
});
