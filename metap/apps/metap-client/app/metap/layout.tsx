import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (

        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Metap</title>
            </head>
            <body className=''>
                {children}
            </body>
        </html>
    )
}

export default layout