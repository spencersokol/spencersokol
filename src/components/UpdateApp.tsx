import { useUpdateCheck } from 'react-update-notification';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const UpdateApp = () => {
    const { status, reloadPage } = useUpdateCheck({
        type: 'interval',
        interval: 10000,
    });

    if (status === 'checking' || status === 'current') {
        return null;
    }

    return (
        <Alert className='fixed bottom-4 right-4 max-w-[300px] z-[100]'>
            <AlertDescription className='text-white my-2 flex'>
                <div className='inline-block mr-4 p-6 text-4xl/4 rounded-full flex-none font-(family-name:--font-savate) bg-white text-tertiary animate-wiggle-lg'>?</div>
                <div className='my-auto'>Refresh the page to get the latest version of the site!</div>
            </AlertDescription>
        </Alert>
    );
};

export default UpdateApp;