'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import { login } from '../../api/auth/login';

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const data = await login(email, password);

            if (data.success) {
                localStorage.setItem('token', data.token); // 토큰을 로컬 스토리지에 저장
                localStorage.setItem('user', JSON.stringify(data.user)); // 사용자 정보 저장
                router.push('/'); // 메인 페이지로 리다이렉트
            }

            setError(data.message || '로그인에 실패했습니다.');
        } catch (err) {
            setError('로그인 중 오류가 발생했습니다.');
            alert(error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>로그인</h1>
                {error && <div className={styles.error}>{error}</div>}
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="이메일을 입력하세요"
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="비밀번호를 입력하세요"
                        />
                    </div>
                    <button type="submit" className={styles.submitButton} onClick={handleSubmit}>
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
} 