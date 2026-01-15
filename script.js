 let jumpscareTriggered = false;
        let scrollAmount = 0;

        window.addEventListener('scroll', () => {
            scrollAmount += 1;
            
            if (scrollAmount > 200 && !jumpscareTriggered) {
                triggerJumpscare();
            }
        });

        function triggerJumpscare() {
            jumpscareTriggered = true;
            const js = document.getElementById('jumpscare');
            const scream = document.getElementById('screamSound');
            
            js.style.display = 'flex';
            scream.play().catch(e => console.log('Audio play failed:', e));
            
            document.body.style.animation = 'flash 0.1s infinite';
            
            setTimeout(() => {
                js.style.display = 'none';
                document.body.style.animation = '';
                scream.pause();
                scream.currentTime = 0;
                
                setTimeout(() => {
                    jumpscareTriggered = false;
                    scrollAmount = 0;
                }, 5000);
            }, 1500);
        }

        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });