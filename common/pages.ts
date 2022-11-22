import { useRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';

export enum pages {
    //라우터 설정 후, 아래에 path를 기록합니다.
    home = '/',
    auth = '/auth',
    loginEmail = '/auth/login/email',
    signup = '/auth/signup',
}

export function useMoveToPage(path: pages, params?: string[], query?: ParsedUrlQueryInput) {
    /**
     * 사용예시
     * const goAuth = useMoveToPage(pages.auth);
     * const goAuth = useMoveToPage(pages.auth,['/123','/123']);
     * const goAuth = useMoveToPage(pages.auth, undefined, { 'foo' : 'bar' });
     */

    const router = useRouter();
    const param = params ? params.reduce((prev, cur) => (prev += cur)) : '';

    return () => {
        router.push({
            pathname: path + param,
            query: query,
        });
    };
}
