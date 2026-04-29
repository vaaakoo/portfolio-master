function ContactTemplate({ name, email, message }) {
    return (
        <html>
        <body
            style={{
                margin: 0,
                padding: 0,
                backgroundColor: '#111827',
                color: '#FAF9F6',
                fontFamily:
                    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            }}
        >
        <table width="100%" cellPadding="0" cellSpacing="0" border="0">
            <tr>
                <td>
                    <table
                        width="600"
                        align="center"
                        cellPadding="0"
                        cellSpacing="0"
                        style={{
                            margin: '40px auto',
                            backgroundColor: '#1F2937',
                            borderRadius: '8px',
                            overflow: 'hidden',
                        }}
                    >
                        <tr>
                            <td
                                style={{
                                    backgroundColor: '#0f172a',
                                    padding: '20px',
                                    textAlign: 'center',
                                }}
                            >
                                <h1 style={{ color: '#14b8a6', margin: 0, fontSize: '24px' }}>VAKO PORTFOLIO</h1>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '30px 20px 10px', textAlign: 'left' }}>
                                <strong style={{ fontSize: '18px' }}>
                                    Message from {name} (<a href={`mailto:${email}`} style={{ color: '#14b8a6' }}>{email}</a>):
                                </strong>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: '20px', textAlign: 'left' }}>
                                <p
                                    style={{
                                        fontSize: '16px',
                                        lineHeight: '1.6',
                                        margin: 0,
                                        fontStyle: 'italic',
                                        backgroundColor: '#111827',
                                        padding: '15px',
                                        borderRadius: '4px'
                                    }}
                                >
                                    {message}
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        </body>
        </html>
    );
}

export default ContactTemplate