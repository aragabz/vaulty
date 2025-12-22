import {showMessage, MessageOptions} from 'react-native-flash-message';

type MessageType = 'success' | 'danger' | 'warning' | 'info';

interface ShowFlashMessageOptions {
  message: string;
  description?: string;
  type?: MessageType;
  duration?: number;
}

export const showFlashMessage = ({
  message,
  description,
  type = 'info',
  duration = 3000,
}: ShowFlashMessageOptions) => {
  showMessage({
    message,
    description,
    type,
    duration,
    floating: true,
    animationDuration: 225,
  } as MessageOptions);
};

export const showSuccessMessage = (message: string, description?: string) => {
  showFlashMessage({message, description, type: 'success'});
};

export const showErrorMessage = (message: string, description?: string) => {
  showFlashMessage({message, description, type: 'danger'});
};

export const showWarningMessage = (message: string, description?: string) => {
  showFlashMessage({message, description, type: 'warning'});
};

export const showInfoMessage = (message: string, description?: string) => {
  showFlashMessage({message, description, type: 'info'});
};
