export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();

    // 응답이 에러인지 아닌지 확인
    // 만약 에러라면 (!response.ok)
    if (!response.ok) {
        throw new Error('Failed to fetch places');
    }


    return resData.places;
}