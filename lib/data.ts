import { Zap, GitBranch, Terminal, Unlock, Feather, SlidersHorizontal } from 'lucide-react';

export const navItems = [
  { label: 'For end-users', href: '#end-users' },
  { label: 'For developers', href: '#developers' },
  { label: 'FAQ', href: '#faq' },
];

export const features = [
  {
    icon: Zap,
    title: 'Fast by default',
    description: 'A sub-second boot path and an init sequence trimmed to what your hardware actually needs.',
  },
  {
    icon: GitBranch,
    title: 'Rolling release',
    description: 'Continuous, atomic updates. No version numbers to wait for, no reinstalls, ever.',
  },
  {
    icon: Terminal,
    title: 'Developer tools, built-in',
    description: 'Compilers, containers, and a package graph that resolves in milliseconds — out of the box.',
  },
  {
    icon: Unlock,
    title: 'Open, to the core',
    description: 'Every layer of the stack is inspectable and forkable. Nothing is hidden from you, ever.',
  },
  {
    icon: Feather,
    title: 'Lightweight system',
    description: 'A minimal base image that stays out of your way — you decide what gets installed.',
  },
  {
    icon: SlidersHorizontal,
    title: 'High customization',
    description: 'Swap the shell, the compositor, the kernel scheduler. ARCH//2099 has no opinions about your workflow.',
  },
];

export const stats = [
  { label: 'Cold boot time', value: 1.8, suffix: 's', decimals: 1 },
  { label: 'Idle RAM usage', value: 240, suffix: 'MB' },
  { label: 'Packages available', value: 68000, suffix: '+' },
  { label: 'Median syscall latency', value: 0.4, suffix: 'ms', decimals: 1 },
  { label: 'Uptime, last release', value: 99.98, suffix: '%', decimals: 2 },
  { label: 'Security audit score', value: 96, suffix: '/100' },
];

export const terminalLines = [
  { prompt: '~ $', text: 'arch2099 install --profile developer', delay: 0 },
  { output: true, text: 'Resolving package graph... 1,204 packages locked in 340ms' },
  { output: true, text: 'Provisioning btrfs subvolumes... done' },
  { output: true, text: 'Applying kernel: linux-2099-zen 6.9.4' },
  { output: true, text: 'System ready. Welcome to ARCH//2099.' },
  { prompt: '~ $', text: 'systemctl status arch2099-core', delay: 1 },
  { output: true, text: '● arch2099-core.service — active (running)' },
];

export const philosophyPoints = [
  {
    title: 'Minimalism',
    description: 'Ship the kernel and the shell. Everything else is a choice you make, not one made for you.',
  },
  {
    title: 'Freedom',
    description: 'No telemetry, no forced updates, no vendor lock-in. Your machine answers to you.',
  },
  {
    title: 'Performance',
    description: 'Every layer is profiled and trimmed. Speed is a design constraint, not an afterthought.',
  },
];
