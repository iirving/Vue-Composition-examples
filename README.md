# a collection of Vue 3 simple apps demonstrating concepts

To Use : clone repo and open various folders or index.html files

1. [Shop list : adding Vue to html page](./shopp-list-embeded-vue/)

   an HTML app with Vue embed, no compoents.

2. [A click counter with a html embeded in JS ](./click-counter-embeded-render)

   HTML comming from the JS in a vue compoent in a separate file (very React like).

3. [A click counter with html in the html page ](./click-counter/)

   HTML is in the vue template, otherwise same as above.

4. [A list app with a x-template in the html page, and data passed in via props ](./plan-picker/)

   an Inital plan picker, with nested components and basic props.

5. [A more advance picker with communcation between child to parent ](./plan-picker-custom-event)

   emiting clicks on child component to affect value in parent component.

6. [A simple slots Demo](./slots/)

   Use slots and named slots where merge props won't cut.

7. [a simple Github Profie component](./Github%20Profile%20Component/),

   pulling data from the github api using userName, and displaying.

8. [a notification message chip component](./notifcation-component/)

   a component show shows a chip style notification element, with the type and header passed in via props, and more dettailed message via slots. Also allows for the closing and hiding of the notification.
