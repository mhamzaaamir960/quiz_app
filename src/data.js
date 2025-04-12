export  const quizData = [
  {
    id: 1,
    question:
      "I want to obtain an IP address to use and communicate with the other hosts on the network. What should I use?",
    answers: ["ARP", "NAT", "DHCP", "ICMP"],
    correctAnswer: "DHCP",
  },
  {
    id: 2,
    question:
      "I want to find out the DNS server and default route on a network automatically. Which protocol should I use?",
    answers: ["ARP", "DHCP", "ICMP", "NAT"],
    correctAnswer: "DHCP",
  },
  {
    id: 3,
    question:
      "I want to find another host's hardware (MAC) address on the network. Which protocol lets me get this information?",
    answers: ["ICMP", "NAT", "DHCP", "ARP"],
    correctAnswer: "ARP",
  },
  {
    id: 4,
    question:
      "We need to give 25 devices Internet access; however, we only have one public IP address. What can we use to allow multiple private IP addresses to use a single public IP address?",
    answers: ["DHCP", "NAT", "ARP", "ICMP"],
    correctAnswer: "NAT",
  },
  {
    id: 5,
    question:
      "I am curious about the route the packets traverse to reach the destination server. What protocol would let me discover the path?",
    answers: ["ICMP", "NAT", "ARP", "DHCP"],
    correctAnswer: "ICMP",
  },
  {
    id: 6,
    question:
      'I want to confirm that I can exchange packets with another host as if I am playing "ping pong". Which protocol supports this?',
    answers: ["ARP", "DHCP", "NAT", "ICMP"],
    correctAnswer: "ICMP",
  },
];
