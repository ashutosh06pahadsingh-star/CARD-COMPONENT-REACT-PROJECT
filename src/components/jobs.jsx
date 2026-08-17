const Jobs = [
    {
        logo: "data:image/png;base64,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",
        company: "Google",
        published: "2 days ago",
        post: "Software Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        salary: "$35 / hour",
        location: "Bengaluru, India"
    },

    {
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAZlBMVEX/////VyJMr1ADqfT/wQf/s6Sv17D/RgD/7ens9u04qT3n9f7/+OgAo/P/vQCg1Pn/4KD/TQZAq0X/rZ3/9fP1+vX/OgAqpjDy+v7/+/IAn/P/3pn/2dLX69j/MQAdoyXQ6fz/79BA3zUVAAAAoklEQVRoge3WNxKDQBQEUWSwAmEWj+z9L6kArbI/RYy646kXTxAQEQU3F4pcu666SHY3cBfXoj5ZV+nQiLLIwMP6IIo9nh1FDTg4ODg4ODg4+C5x18eih8efmWiw8DaR+Vkq6wycaHvjReZnuWwy8HIuRPNXz6+yxcKLk6j44WdVBQ4ODg4ODg4Ovk982xFVtnlEX6VsXFfTUomWt4ET0V/1AZkoSaZmxvlOAAAAAElFTkSuQmCC",
        company: "Microsoft",
        published: "4 days ago",
        post: "Frontend Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        salary: "$42 / hour",
        location: "Hyderabad, India"
    },

    {
        logo: "data:image/png;base64,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",
        company: "Amazon",
        published: "1 day ago",
        post: "Software Development Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        salary: "$32 / hour",
        location: "Bengaluru, India"
    },

    {
        logo: "data:image/jpeg;base64,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",
        company: "Apple",
        published: "6 days ago",
        post: "iOS Software Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        salary: "$45 / hour",
        location: "Hyderabad, India"
    },

    {
        logo: "data:image/png;base64,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",
        company: "Meta",
        published: "3 days ago",
        post: "React Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        salary: "$38 / hour",
        location: "Hyderabad, India"
    },

    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        company: "Netflix",
        published: "5 days ago",
        post: "Backend Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        salary: "$48 / hour",
        location: "Mumbai, India"
    },

    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        company: "IBM",
        published: "2 days ago",
        post: "Cloud Software Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        salary: "$28 / hour",
        location: "Pune, India"
    },

    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
        company: "Oracle",
        published: "7 days ago",
        post: "Java Developer",
        tag1: "Full Time",
        tag2: "Senior Level",
        salary: "$38 / hour",
        location: "Bengaluru, India"
    },

    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
        company: "Salesforce",
        published: "3 days ago",
        post: "Full Stack Developer",
        tag1: "Full Time",
        tag2: "Junior Level",
        salary: "$31 / hour",
        location: "Hyderabad, India"
    },

    {
        logo: "data:image/png;base64,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",
        company: "Adobe",
        published: "5 days ago",
        post: "UI/UX Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        salary: "$40 / hour",
        location: "Noida, India"
    },
    {
        logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAACUCAMAAACgG7y2AAAAgVBMVEX///93uQBrtAC01ohxtRz///1ytwCDvyi925xvtQDE36VnsgD4+/P0+e79/vp4uAPu9eTN5LDm8dfP5bjn8d51uBT1+urZ6sW72pZdrgB6uy6Lwk7b68qTxU+z1pGQxFaFwEWGwDqhzGeu032hzXB9uzqXyGCfzF2qznKOwT+JwDLHgFImAAANKElEQVR4nO2dCXeyOhOAMTSBsG+KIipbae3//4Ffgq0lk+DSCva9H3POe07vLWJ4mMyWSapps8wyyyyzzDLLLLPMMssss0wqeHrx8LMfWhCsre2XicXWn/3UUEx7MbGgv8cAzQxmBjMDLjODmQGXmcHMgMvMYGbAZWYwM+AyM+AM/NPQfP//l8EGEbJYEEKRjRCi/y8MsKZ5jruK4nW9M7//txvl4f6teM2WC47lP8oAdxUcJ4jSdWvYNnvxtiVd5ESh3mwNQkfi8HQ9wEEe6jvfRvwJmQVAfQb4i5KmJbHeHP1RMDyLAT49WxLvWwP1nwzJevAlbh7W5QgG4mkM2L/Aqg9LBN7sIIMOmhPFDYIf+VcZaFraFEuFpbugBydxorVhP5TCExjw9+mZhgrALQzYDZw4eySFZ+gBjirbHgiAiMIvqCTfLR9GYXoGbvqGkEyAMFm8lEVhBslJgsB1PO2kN0C4bUgPLw+iMDWDIDzYkmUnlC7KttHXYRqt9jayuSC/PNRmnCfu+bGBhO3yIU5iQga4IyD5NoJI2azDPPBOl53XWJhisFDZ39VWHKggYM0JD48IGKbUA9dqKSBAkF3s42jVez6YN7K8wWj12FXeMjGN36eZEzFgLxGHB2jGiO3rUeB0Fwwy4EJJdtAj1YTwkndmXn+XYU7FQMsZAXGo1D7GriddOlA/ICSrctWNvRT9UhWmYMBenlMBh+4TWgXKqwdrKD5Fu/wcZZ9vzihU6FeaMIkeOBbwhmTxWq8GLr5UR6J2GzkKZxkavzGNozNg1jvfIWEaEFrUgdLbXWPgLyiqEwwpYC1qfhEyja8Hkf4iOgOa6YqJfZZr9UTbCBWTyDX9H0MYkwF/X561FV04IVXqqWI/7XOqmxvEoiSKeCVN+VjMkqRY1CJuFOIfe8lR9QBrSQV0FPmhqwx/T+KtclO34k7CdX3wbVVyRLM1tAqMQrL7YQfLeAz4iwpfqWCx/c1bgiVDgE+m3k31dltkFv70l9hz3CAK34giuF7uAkCS/ceq+RmEMfXArUAkS2xz6NpIN16YyrDwGOaN2El3tjQrCInlmzjmj1LqERmkGRW9NjkGKmfgOWlDNp2Lh/VELp2K6K+g2uAvNrrkHzQt/ollHI2Ba4JRk2XtKgyBy8tCPWs2UENxzS2sudiVIsSIy/shjMGAv+uogamPYUl2jCWSaUXF4EHNAHNdKMWp5dNdJF+ZF3dDGIlBXAAE9COWU4MgrKRU+kItLa+BkyFHKdBg4VJxb1Hh8Qy4r17D4gb9iKSrHKv15eFeqic6YSmaGFKmko/RkvJOCGPowaqB6oh8eeqmUip9lYGGo52oXyRL5auCj/sgPJwBU8aDpN+GC525U70QkOwhe2NTeqWm6oEYgNBUzh4C4y4Ij9eD+EVCcHSkiyg0mcvsPe7KaWujDleDneRYs0BJevNrTXg0A8+Slg0oi+l6j8S9QWWLiSQpT/UR7vFNXlP9WCcSt9OnsRaCerItQWC6+HGHd3gwA2cvRXTAg2HspUcwqYt975IubyQ2qiPZkZweEMYAviINTbPbITySAdZWuhSxkzLvaUHnDjJBUVnsFKnqicg3lYUmpiux+IDkGMnBV5jdXFp6LAMYGHHDHYuXOMDJ0zJ2NGVNlZBmCEL40b+FT9pEvqy+WREey0CO0ZZm3xRgzd31lcBf2G/wOc8M/AVpVRB4ProUQRe5FIJG26cwYGOTpsJRHJkDDPamlkxfv45EW3lZgT2sJSJgoKVcLGifZQ80+MX+qxAcuZlYX7dNOffrM/BRDQwj70ypbbFljb5LCFbNHc7xwX5B2ozEX9H3r6MX4ZfUUoQBYj1xEwqQePNWKX6Hj3bSXdz6nmrKgxm4Uq2jFUKDQkCgq+rkAgNmMPomgSeksGxICykld2T3NB0D7K3Bt7Ospv8IYf8BaKMqKIC6Mm2/pwtfVIIrCbQUPCsXT7+vuvpgPcARHCPRe9GB5gmj86E5VzBgE+broi62gLfPQL7AiN2J4PGxsqQIxXcMyAYr2Cq0VuQF0vpCeb6Bq0urtstYAwbjXi0YIWeSInVi9o120EdEDMWKusSANF6XSGirFhQoF8QPoUdwbo+NRmPg7UFeRw/9IA6/9RXBDm9gsFiGHQMpI/YJBYk2D0Pvb015NANFgCZWBBIBkX/D2rt/ohhvJJ+zDKE9+dESwwh1JBNOhiLpDVV8UbZ5MUb6usMaO5a0dEBY7AHsYSAnLM9hEBwkRehP2kiwa0gKEVQMynhPYYsB1wJBmAq2CgTXO95HqKnCjIaZvn6c4+wF11DDOFe17kyM5QIwkDyCpqVbVRtPe7ymG2PUlT2Yr/Av+Y5zhOI3WcJ64G17edBHLBSn2M9xJptDQusk0uUFy5EZ8KeUus/6RQ5sCXU0mBrexAAVuaAFPJlUVI4I2bO81EmPF9chR1lj0WC8Tj/6A3bbPiMKRnALA9QmQHuwrpj3pEvKmF91Lf/CXUdab4QGrO8fsZaWvV9DD3edASGNoDtsIqwqlRV5Sb9+zzJJSoY2iY3EIIJDWvbMIhbcp09ehZroVQbEgD5RywtFWEDKVe8rtaiSiv7jMtBg0E7aczSEYdpA2765uMaAHlJgCrxY0bdMSNV3u12X90B/81gMHOiql1bfN7hbEUJvel9mQEm9AkoQ7BVNyzRby11PXlipooWRGGAtB4sAQo2duQ4h+O/buIsMUBF6oEszVQVGtIix1PbE0y5rJzd6jdaD4VkwZBb7UlPhjaDtOUG+wIAQPYJpolnCZLJjCq/7EpyY0oQYrxfHgxkcNb3+C4xJv75KXuPPgHGIge/bx1RIsfg6eyMrt8+CT/VC3Wlc0RuIFkbsRwpaGCoJoZ0WC9OY0M+C0xAD5IeSeocqI0dUGflZuohSTO/H7EtLQTMEIf2VR6zFYic7KnP+mpX5Allma01o72U/Bq3CI/r0Q1Wl7H8xCyeOwkQcsz8xXIJySiauG6WluPyMmtyVy/OEkvJgeSA01txY1bNPMlW7GhiZFuiCRR5PDxiENRglOvQDPL6pQdQURJuU2SxKv/ozup1O1ZrbAbFq6OStIgcgZBtfQ8DDpYMwrpF7deFahw2sVSJlFvY6Neu2NAgHYWybfZjLRUcv11WWgC51xeIrFCcERbmRGTiwtkV1T7wAZjO8H8lJojzlkkerbncfWGqKdGXbFcunVYs2YEhRDV3J2L37AYxgiC5qAgZKfX2fa1K/LhTRHtnU6o0x4teF8tr4yAyYBy/Ahk4Igetmz1ddYNDFh6v3F1W869t+LneDw89rq1bRDDf+Ho5kB/QWNXCCe2Z2fq7LvXn5Tl0TYhHk0KaI/sf3yk9PsJcnkmqsTSK6ek5h+4lhsFeXWQmrtImqBkCWrbToKN/ASX1bufdrij1dUsMi2spdVF5cH5hXlHv3O8FuFDdEXREjpA3V7Vt9cXO4tW5KBrzmDSEYsbwbhx+K0RRw6YgPP4qtxhg4AIOgrQX3c0gDYDpQw+2V0+oBezroIgnZwzJAJ6soNq00ClzH8TzHCaI8NvVm66OBfc3ELk1F8zoQL24ubXaahAHmjSFwiaTNpbfXaYZJy+LQtm1Vte1h+2os6MDz+4yAYUaX40L+u7TKLm4Nn2rPt7OGs5EYa+UsNm3Slwtjt30zuGoIcHzIriw1TbbfGccLOKEVLSTazeelEXsRXkkNuB2wyusnyEy491/uGCSbSn6RtzAgJGsVrdqiYCfQ/Vs2eU3GgOf7tbTjCtn7rjm75yOuMmCpdLtXHgRw/i72zwvyBqnjgacx4OIxzYSDQgs9XSl7dVVCKMqafXqhVHYSN7d2N58mNSUD9pzs3UjKSZeN1ZVAT/XiYQbUJsfaSl1tWAe6W+DIqo07DpKa9kwY5iRZgiQ/HCka86tVX1lLo3xPQ8MiB/frRur786QqrIv7jpeb+FwcZsmjmr0iyTpS//Xw3qmDufn2iN0hirZNjXYfJ4E7cFLQ5427nCJ+3xr3njP4jDOi8lJlrdmTL1+yY6Xrb0deRWKz2TjuqrWVJq5321+JSJuh07f+GgPee18qawDcXqr3dF1DgD0nfdvYUsPOX2XQjdncDpzvdMN5aVAcNwpbeqXZ5K8x4NbbtdqlynLdzOBz1dGN0v3hFwCexeBkv9xQV5wIeY8esKTabMpfn6f4vPMTeTSfhxUsjFxmgM9lBzey9KYYTKr/EQafqmzuUF+Tb9GDIF03h2I5lFT/Owy+xHOCuFrYX2cgIKvvBCR/4ORm9fr6ciWr/tcYnGQVvn8gNrMH6ok8wozCmp+/+/iTlv8Ig9P7jmKr3lkuF4cL/yEIotTSqw/Kj1Qc59Dtv8EA97Ig0zY+jm9vTdPuitLwSXfyNIWb5P97DPpi2jxspnzxecwDxv82g/lvD8wMtJkBl5nBzIDLzGBmwGVmMDPgMjPAT/ibtn/t7/pizfKNicX/YwyeIzetXswyyyyzzDLLLLPMMssss8xyr/wPvu3PbO0gzjUAAAAASUVORK5CYII=",
        company: "NVIDIA",
        published: "2 days ago",
        post: "AI Software Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        salary: "$50 / hour",
        location: "Bengaluru, India"
    },

    {
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/cisco.svg",
        company: "Cisco",
        published: "4 days ago",
        post: "Network Software Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        salary: "$36 / hour",
        location: "Bengaluru, India"
    },
    {
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/stripe.svg",
        company: "Stripe",
        published: "2 days ago",
        post: "Software Engineer",
        tag1: "Full Time",
        tag2: "Senior Level",
        salary: "$45 / hour",
        location: "Bengaluru, India"
    },

    {
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/github.svg",
        company: "GitHub",
        published: "3 days ago",
        post: "Full Stack Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        salary: "$40 / hour",
        location: "Bengaluru, India"
    },

    {
        logo:"data:image/png;base64,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",
        company: "Accenture",
        published: "5 days ago",
        post: "Cloud Engineer",
        tag1: "Full Time",
        tag2: "Junior Level",
        salary: "$27 / hour",
        location: "Mumbai, India"
      }
];

export default Jobs;