export const request = async (url, option = {}) => {
    try {
        // 테스트 콘솔
        console.log(
            `Sending request to: https://kdt-api.fe.dev-cos.com/documents${url}`
        );
        const response = await fetch(
            `https://kdt-api.fe.dev-cos.com/documents${url}`,
            {
                ...option,
                headers: {
                    "x-username": `codingiscold`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            // 서버 응답 상태 코드와 메시지 출력
            const errorResponse = await response.text();
            console.error(
                `API Error: Status ${response.status}, Response: ${errorResponse}`
            );
            throw new Error(
                `Api Error, Status: ${response.status}, Message: ${response.statusText}, Response: ${errorResponse}`
            );
        }
    } catch (e) {
        console.error("통신 문제", e); // 에러를 좀 더 자세히 출력
        throw e; // 다시 throw하여 호출한 곳에서 처리하도록 함
    }
};
