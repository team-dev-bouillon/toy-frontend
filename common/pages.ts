enum pages {
    /**
     * 라우터 설정 후, 아래에 path를 기록합니다.
     *
     * 사용예시
     * const router = useRouter();
     * router.push(pages.auth);
     */

    home = '/',
    auth = '/auth',
    loginEmail = '/auth/login/email',
    signup = '/auth/signup',
}

export function combineStrings({ list }: { list: string[] }): string {
    return list.reduce((prev, cur) => (prev += cur));
}

export default pages;
