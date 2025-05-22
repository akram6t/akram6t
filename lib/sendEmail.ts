import { Resend } from 'resend';


export const sendEmail = async (
    name: string,
    email: string,
    message: string,
    subject?: string,
) => {

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
        from: 'akram6t.vercel.app <onboarding@resend.dev>',
        to: ['khanakram8435@gmail.com'],
        subject: `New message from ${name} <${email}> - ${subject || ''}`,
        html: `<pre> <code> ${message} </code> </pre>`,
    });

    if (error) {
        console.error('Error sending email:', error);
        return { success: false, error };
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };

}