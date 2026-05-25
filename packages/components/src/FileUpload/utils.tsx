import type * as React from 'react';

import {
  LuFileArchive as FileArchiveIcon,
  LuFileAudio as FileAudioIcon,
  LuFileCode as FileCodeIcon,
  LuFileCog as FileCogIcon,
  LuFile as FileIcon,
  LuFileText as FileTextIcon,
  LuFileVideo as FileVideoIcon,
} from '@/icons/lu';

export const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(i ? 1 : 0)} ${sizes[i]}`;
};

export const getFileIcon = (file: File): React.ReactNode => {
  const type = file.type;
  const extension = file.name.split('.').pop()?.toLowerCase() ?? '';

  if (type.startsWith('video/')) {
    return <FileVideoIcon />;
  }

  if (type.startsWith('audio/')) {
    return <FileAudioIcon />;
  }

  if (type.startsWith('text/') || ['txt', 'md', 'rtf', 'pdf'].includes(extension)) {
    return <FileTextIcon />;
  }

  if (
    ['html', 'css', 'js', 'jsx', 'ts', 'tsx', 'json', 'xml', 'php', 'py', 'rb', 'java', 'c', 'cpp', 'cs'].includes(
      extension,
    )
  ) {
    return <FileCodeIcon />;
  }

  if (['zip', 'rar', '7z', 'tar', 'gz', 'bz2'].includes(extension)) {
    return <FileArchiveIcon />;
  }

  if (['exe', 'msi', 'app', 'apk', 'deb', 'rpm'].includes(extension) || type.startsWith('application/')) {
    return <FileCogIcon />;
  }

  return <FileIcon />;
};
