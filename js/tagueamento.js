// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
    ga('create', 'UA-XXXXX-Y', 'auto');
    ga('send', 'pageview');

    let elements =  [
        {
            id: 'contato',
            eventCategory: 'menu',
            eventAction: 'entre_em_contato',
            eventLabel: "link_externo"
        },
        {
            id: 'download',
            eventCategory: 'menu',
            eventAction: 'download_pdf',
            eventLabel: 'download_pdf'
        },
        {
            id: 'lorem',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: 'Lorem'
        },
        {
            id: 'ipsum',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: 'Ipsum'
        },
        {
            id: 'dolor',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: 'Dolor'
        },
    ]

    let formContato = [
        {
            id: 'nome',
            eventCategory: 'contato',
            eventAction: 'nome',
            eventLabel: 'preencheu',
            listenerType: 'blur',
            hasSent: false
        },
        {
            id: 'email',
            eventCategory: 'contato',
            eventAction: 'email',
            eventLabel: 'preencheu',
            listenerType: 'blur',
            hasSent: false
        },
        {
            id: 'telefone',
            eventCategory: 'contato',
            eventAction: 'telefone',
            eventLabel: 'preencheu',
            listenerType: 'blur',
            hasSent: false
        },
        {
            id: 'aceito',
            eventCategory: 'contato',
            eventAction: 'aceito',
            eventLabel: 'preencheu',
            listenerType: 'change',
            hasSent: false
        },
        {
            id: 'form',
            eventCategory: 'contato',
            eventAction: 'enviado',
            eventLabel: 'enviado',
            listenerType: 'submit',
            hasSent: false
        }
    ]

    elements.forEach(({id, eventAction, eventCategory, eventLabel}) => {
        let el = document.getElementById(id)
        if (!el) {
            return
        }
        el.addEventListener("click", (e) => {
            ga('send', 'event', {
                eventCategory,
                eventAction,
                eventLabel
            });
        })
    })

    formContato.forEach(({id, eventAction, eventCategory, eventLabel, listenerType}, index) => {
        let el = document.getElementById(id)
        if (!el) {
            return
        }
        el.addEventListener(listenerType, (e) => {
            console.log(e)
            if ((e.target.value || e.target.checked || e.type == 'submit') && formContato[index].hasSent === false) {
                ga('send', 'event', {
                    eventCategory,
                    eventAction,
                    eventLabel
                });
                formContato[index].hasSent = true
            }
        })
    })