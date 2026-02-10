tailwind.config = {
    theme: {
        extend: {
            colors: {
                'vibrant-red': '#FF0000',      /* Rouge vif */
                'st-val-pink': '#FF1493',      /* Rose Saint-Valentin */
                'romantic-pink': '#FF69B4',    /* Rose romantique */
                'passion-red': '#DC143C',      /* Rouge passion */
                'pure-white': '#FFFFFF',       /* Blanc pur */
                'off-white': '#F5F5F5',        /* Blanc cassé */
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    }
}