import type { FC } from 'react';
import type { ErrorLayoutProps } from './ErrorLayout';

import { ErrorLayout } from './ErrorLayout';

interface ErrorInternalServerResponseProps extends Partial<ErrorLayoutProps> {}

/**
 * ErrorInternalServerResponse Component
 *
 * Displays a critical server error message for severe/unexpected server failures.
 * Used for serious errors that require immediate attention or support contact.
 * More urgent tone than ErrorInternalResponse.
 *
 * @example
 * // Basic usage
 * import { ErrorInternalServerResponse } from '@paalstack/react-ui';
 *
 * <ErrorInternalServerResponse>
 *   <Button onClick={() => contactSupport()}>Contact Support</Button>
 * </ErrorInternalServerResponse>
 *
 * @example
 * // With custom critical message
 * <ErrorInternalServerResponse
 *   heading="Critical system error"
 *   subHeading="A serious error has occurred. Our team has been notified. Please contact support immediately if this is urgent."
 * >
 *   <div className="flex flex-col gap-2">
 *     <Button onClick={() => window.location.href = 'mailto:support@example.com'}>
 *       Email Support
 *     </Button>
 *     <Button variant="outline" onClick={() => navigate('/')}>
 *       Return Home
 *     </Button>
 *   </div>
 * </ErrorInternalServerResponse>
 *
 * @example
 * // Critical 500 error
 * {response.status === 500 && response.critical ? (
 *   <ErrorInternalServerResponse>
 *     <Button onClick={() => contactEmergencySupport()}>
 *       Contact Emergency Support
 *     </Button>
 *   </ErrorInternalServerResponse>
 * ) : (
 *   <ErrorInternalResponse />
 * )}
 *
 * @example
 * // Database failure
 * <ErrorInternalServerResponse
 *   heading="Database connection lost"
 *   subHeading="We've lost connection to our database. Our engineers have been alerted. Please contact support for immediate assistance."
 * >
 *   <Button onClick={() => openSupportChat()}>
 *     Chat with Support
 *   </Button>
 * </ErrorInternalServerResponse>
 *
 * @example
 * // Payment system down
 * <ErrorInternalServerResponse
 *   heading="Payment system unavailable"
 *   subHeading="Our payment system is experiencing critical issues. Please do not attempt transactions. Contact support immediately."
 *   showIcon
 * >
 *   <div className="flex gap-2">
 *     <Button onClick={() => navigate('/support')}>
 *       Contact Support
 *     </Button>
 *     <Button variant="outline" onClick={() => navigate('/dashboard')}>
 *       Go to Dashboard
 *     </Button>
 *   </div>
 * </ErrorInternalServerResponse>
 *
 * @example
 * // Data corruption error
 * <ErrorInternalServerResponse
 *   heading="Data integrity error"
 *   subHeading="A critical data error has been detected. Please contact our support team immediately. Do not proceed with any operations."
 * >
 *   <Button variant="destructive" onClick={() => emergencyContact()}>
 *     Emergency Support
 *   </Button>
 * </ErrorInternalServerResponse>
 *
 * @example
 * // Security incident
 * <ErrorInternalServerResponse
 *   heading="Security alert"
 *   subHeading="An unusual error pattern has been detected. For your security, this session has been terminated. Please contact support."
 * >
 *   <Button onClick={() => navigate('/login')}>
 *     Return to Login
 *   </Button>
 * </ErrorInternalServerResponse>
 *
 * @example
 * // With error details displayed
 * <ErrorInternalServerResponse
 *   heading="Critical server error"
 *   error={error}
 * >
 *   <Button onClick={() => reportCriticalError(error)}>
 *     Report Error & Contact Support
 *   </Button>
 * </ErrorInternalServerResponse>
 *
 * @example
 * // Integration outage
 * <ErrorInternalServerResponse
 *   heading="Third-party service outage"
 *   subHeading="A critical integration service is down. This affects core functionality. Our team is working on it. Please contact support for updates."
 * >
 *   <div className="flex flex-col gap-2 items-center">
 *     <Button onClick={() => checkStatus()}>Check Status Page</Button>
 *     <Button variant="link" onClick={() => contactSupport()}>
 *       Contact Support
 *     </Button>
 *   </div>
 * </ErrorInternalServerResponse>
 *
 * @example
 * // Custom styling for urgency
 * <ErrorInternalServerResponse
 *   heading="URGENT: System failure"
 *   subHeading="Critical system failure detected. Immediate action required."
 *   className="border-4 border-red-600"
 *   headingClassName="text-2xl text-red-700 font-bold"
 * >
 *   <Button size="lg" onClick={() => emergencyProtocol()}>
 *     Activate Emergency Protocol
 *   </Button>
 * </ErrorInternalServerResponse>
 *
 * @tip Use this for critical errors that require immediate attention or support contact
 * @tip Differentiate from ErrorInternalResponse by using more urgent language
 * @tip Always provide a clear path to support (email, chat, phone)
 * @tip Consider automatically notifying your support team when this error displays
 * @tip Use for scenarios where user action alone cannot resolve the issue
 */
export const ErrorInternalServerResponse: FC<ErrorInternalServerResponseProps> = ({
  children,
  heading = 'Something went seriously wrong',
  subHeading = 'It sounds like something unexpected happened right now. Please, inform our support team about this issue ASAP!',
  ...props
}) => {
  return (
    <ErrorLayout data-qa="error-internal-server-response" heading={heading} subHeading={subHeading} {...props}>
      {children}
    </ErrorLayout>
  );
};
