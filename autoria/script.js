$(document).ready(function() { /* Esta linha garante que o código dentro da função será executado apenas quando o documento HTML estiver completamente carregado. Isso é útil para garantir que o script JavaScript seja executado após a construção completa da página, evitando possíveis erros.*/

    $('.color-choose input').on('click', function() { /*Aqui, é definido um manipulador de eventos para o evento de clique nos elementos de entrada (input) que estão dentro de elementos com a classe color-choose. Quando um desses elementos é clicado, a função anônima dentro desta linha é executada.*/
        var headphonesColor = $(this).attr('data-image'); /* Esta linha extrai o valor do atributo data-image do elemento de entrada (input) que foi clicado e armazena na variável headphonesColor.*/
  
        $('.active').removeClass('active'); /* Remove a classe 'active' de qualquer elemento que atualmente a possua. Isso geralmente é usado para desativar o estado "ativo" de algum elemento anteriormente selecionado.* */
        $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active'); /*Seleciona a imagem correspondente à cor dos fones de ouvido (com base no valor do atributo data-image) na coluna esquerda e adiciona a classe 'active' a ela. Isso destaca visualmente a imagem selecionada.* */
        $(this).addClass('active'); /*Adiciona a classe 'active' ao elemento de entrada (input) que foi clicado. Isso é feito para destacar visualmente a escolha do usuário.* */
    });
  
  });