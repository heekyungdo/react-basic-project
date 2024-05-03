import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // throw new Error('failed');
    return db.prepare('SELECT * FROM meals').all();
}

// 식사 정보의 메뉴를 식별하는 slug가 있어야한다. 
// 플레이스홀더('?')에 들어가는 값을 get으로 전달한다.
export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}