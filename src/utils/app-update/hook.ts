import { useCallback, useEffect, useState } from 'react';
import { version as currentVersion } from '@/version.json';

/**
 * Heavily based on https://github.com/iamkd/react-update-notification/
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const refreshPage = () => window.location.reload(true);

interface VersionCheckHookParameters {
    type: 'mount' | 'interval' | 'manual';
    interval?: number;
    ignoreServerCache?: boolean;
}

interface VersionCheckHookReturnValue {
    status: VersionCheckStatus;
    refreshPage: () => void;
    checkVersion: () => void;
}

enum VersionCheckStatus {
    checking = 'checking',
    current = 'current',
    available = 'available',
}

interface VersionFileResponse {
  version: string;
}

export const useVersionCheck = ({ type, interval = 3600000, ignoreServerCache = true } : VersionCheckHookParameters) : VersionCheckHookReturnValue => {

    const [status, setStatus] = useState<VersionCheckStatus>(VersionCheckStatus.checking);

    const checkVersion = useCallback(() => {

        setStatus(VersionCheckStatus.checking);

        let endpoint = '/version.json';

        if (ignoreServerCache) {
            endpoint += `?datetime=${Date.now()}`;
        }

        console.log('Checking Version...');
        console.log(`** Client Version: ${currentVersion}`);

        fetch(endpoint)
            .then((res) => res.json() as Promise<VersionFileResponse>)
            .then((data) => {
                console.log(`** Server Version: ${data.version}`);
                if (data.version === currentVersion) {
                    setStatus(VersionCheckStatus.current);
                } else {
                    setStatus(VersionCheckStatus.available);
                }
            })
            .catch(() => {
                setStatus(VersionCheckStatus.current);
            });

    }, [ignoreServerCache]);

    useEffect(() => {
        if (type !== 'manual') {
            checkVersion();
        }
    }, [checkVersion, type]);

    useEffect(() => {
        if (status !== VersionCheckStatus.current) {
            return;
        }

        if (type === 'interval') {
            const timeoutId = window.setTimeout(
                () => checkVersion(),
                interval
            );

            return () => {
                window.clearTimeout(timeoutId);
            };
        }
    }, [type, interval, status, checkVersion]);

    return { status, refreshPage, checkVersion };
}