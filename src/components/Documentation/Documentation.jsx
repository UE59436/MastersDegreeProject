import React from 'react'
import { DocumentationContainer, DownloadIcon, DownloadItem } from './Documentation.style'

const Documentation = () => {
    return (
        <DocumentationContainer>
            <DownloadItem>
                <DownloadIcon />
                Załącznik 1
            </DownloadItem>
            <DownloadItem>
                <DownloadIcon />
                Załącznik 2
            </DownloadItem>
            <DownloadItem>
                <DownloadIcon />
                Załącznik 3
            </DownloadItem>
            <DownloadItem>
                <DownloadIcon />
                Załącznik 4
            </DownloadItem>
        </DocumentationContainer>
    )
}

export default Documentation
