const gradeElementos = [];
const tabuleiro = document.querySelector('.tabuleiro')
const palavrasEmIngles =   [ {'ingles': 'the', 'portugues':'o, a, os, as'},

{'ingles': 'of', 'portugues':'de'},

{'ingles': 'to', 'portugues':'para'},

{'ingles': 'and', 'portugues':'e'},

{'ingles': 'a', 'portugues':'um, uma'},

{'ingles': 'in', 'portugues':'em, dentro'},

{'ingles': 'is', 'portugues':'é'},

{'ingles': 'it', 'portugues':'este'},

{'ingles': 'you', 'portugues':'você'},

{'ingles': 'that', 'portugues':'que, aquele'},

{'ingles': 'he', 'portugues':'ele'},

{'ingles': 'was', 'portugues':'era, estava'},

{'ingles': 'for', 'portugues':'por, para'},

{'ingles': 'on', 'portugues':'em'},

{'ingles': 'are', 'portugues':'são, estão'},

{'ingles': 'with', 'portugues':'com'},

{'ingles': 'as', 'portugues':'como, enquanto'},

{'ingles': 'I', 'portugues':'eu'},

{'ingles': 'his', 'portugues':'seu'},

{'ingles': 'they', 'portugues':'eles'},

{'ingles': 'be', 'portugues':'ser, estar'},

{'ingles': 'at', 'portugues':'em'},

{'ingles': 'one', 'portugues':'um'},

{'ingles': 'have', 'portugues':'ter'},

{'ingles': 'this', 'portugues':'este'},

{'ingles': 'from', 'portugues':'de'},

{'ingles': 'or', 'portugues':'ou'},

{'ingles': 'had', 'portugues':'tinha'},

{'ingles': 'by', 'portugues':'por, em'},

{'ingles': 'hot', 'portugues':'quente'},

{'ingles': 'word', 'portugues':'palavra'},

{'ingles': 'but', 'portugues':'mas'},

{'ingles': 'what', 'portugues':'que'},

{'ingles': 'some', 'portugues':'algum'},

{'ingles': 'we', 'portugues':'nós'},

{'ingles': 'can', 'portugues':'pode, lata'},

{'ingles': 'out', 'portugues':'fora'},

{'ingles': 'other', 'portugues':'outro'},

{'ingles': 'were', 'portugues':'eram, esavam'},

{'ingles': 'all', 'portugues':'todo'},

{'ingles': 'there', 'portugues':'lá'},

{'ingles': 'when', 'portugues':'quando'},

{'ingles': 'up', 'portugues':'para-cima'},

{'ingles': 'use', 'portugues':'usar'},

{'ingles': 'your', 'portugues':'seu'},

{'ingles': 'how', 'portugues':'como, quão'},

{'ingles': 'said', 'portugues':'disse'},

{'ingles': 'an', 'portugues':'um, uma'},

{'ingles': 'each', 'portugues':'cada'},

{'ingles': 'she', 'portugues':'ela'},

{'ingles': 'which', 'portugues':'qual'},

{'ingles': 'do', 'portugues':'fazer, mesmo'},

{'ingles': 'their', 'portugues':'seus'},

{'ingles': 'time', 'portugues':'tempo, hora'},

{'ingles': 'if', 'portugues':'se'},

{'ingles': 'will', 'portugues':'vai, vontade'},

{'ingles': 'way', 'portugues':'caminho, jeito'},

{'ingles': 'about', 'portugues':'sobre, quase'},

{'ingles': 'many', 'portugues':'muitos'},

{'ingles': 'then', 'portugues':'então'},

{'ingles': 'them', 'portugues':'deles'},

{'ingles': 'write', 'portugues':'escrever'},

{'ingles': 'would', 'portugues':'deveria'},

{'ingles': 'like', 'portugues':'como, gostar'},

{'ingles': 'so', 'portugues':'assim, tão'},

{'ingles': 'these', 'portugues':'estes'},

{'ingles': 'her', 'portugues':'dela'},

{'ingles': 'long', 'portugues':'longo'},

{'ingles': 'make', 'portugues':'fazer'},

{'ingles': 'thing', 'portugues':'coisa'},

{'ingles': 'see', 'portugues':'ver'},

{'ingles': 'him', 'portugues':'dele'},

{'ingles': 'two', 'portugues':'dois, duas'},

{'ingles': 'has', 'portugues':'tem'},

{'ingles': 'look', 'portugues':'olhar'},

{'ingles': 'more', 'portugues':'mais'},

{'ingles': 'day', 'portugues':'dia'},

{'ingles': 'could', 'portugues':'poderia'},

{'ingles': 'go', 'portugues':'ir'},

{'ingles': 'come', 'portugues':'vir'},

{'ingles': 'did', 'portugues':'fez, mesmo'},

{'ingles': 'number', 'portugues':'número'},

{'ingles': 'sound', 'portugues':'som'},

{'ingles': 'no', 'portugues':'não'},

{'ingles': 'most', 'portugues':'mais, maior'},

{'ingles': 'people', 'portugues':'pessoas, povo'},

{'ingles': 'my', 'portugues':'meu'},

{'ingles': 'over', 'portugues':'sobre'},

{'ingles': 'know', 'portugues':'saber'},

{'ingles': 'water', 'portugues':'água'},

{'ingles': 'than', 'portugues':'que'},

{'ingles': 'call', 'portugues':'chamar'},

{'ingles': 'first', 'portugues':'primeiro'},

{'ingles': 'who', 'portugues':'quem'},

{'ingles': 'may', 'portugues':'maio, pode'},

{'ingles': 'down', 'portugues':'baixo'},

{'ingles': 'side', 'portugues':'lado'},

{'ingles': 'been', 'portugues':'sido, estado'},

{'ingles': 'now', 'portugues':'agora'},

{'ingles': 'find', 'portugues':'encontrar'},

{'ingles': 'any', 'portugues':'qualquer'},

{'ingles': 'new', 'portugues':'novo'},

{'ingles': 'work', 'portugues':'trabalho'},

{'ingles': 'part', 'portugues':'parte'},

{'ingles': 'take', 'portugues':'pegar'},

{'ingles': 'get', 'portugues':'obter'},

{'ingles': 'place', 'portugues':'lugar'},

{'ingles': 'made', 'portugues':'feito'},

{'ingles': 'live', 'portugues':'viver, vivo'},

{'ingles': 'where', 'portugues':'onde'},

{'ingles': 'after', 'portugues':'após'},

{'ingles': 'back', 'portugues':'atrás, costas'},

{'ingles': 'little', 'portugues':'pequeno, pouco'},

{'ingles': 'only', 'portugues':'somente'},

{'ingles': 'round', 'portugues':'redondo, rodada'},

{'ingles': 'man', 'portugues':'homem'},

{'ingles': 'year', 'portugues':'ano'},

{'ingles': 'came', 'portugues':'chegado'},

{'ingles': 'show', 'portugues':'mostrar'},

{'ingles': 'every', 'portugues':'cada'},

{'ingles': 'good', 'portugues':'bom'},

{'ingles': 'me', 'portugues':'me'},

{'ingles': 'give', 'portugues':'dar'},

{'ingles': 'our', 'portugues':'nosso, nossa'},

{'ingles': 'under', 'portugues':'sob'},

{'ingles': 'name', 'portugues':'nome'},

{'ingles': 'very', 'portugues':'muito, absoluto'},

{'ingles': 'through', 'portugues':'através'},

{'ingles': 'just', 'portugues':'justo, só'},

{'ingles': 'form', 'portugues':'forma, formulário'},

{'ingles': 'sentence', 'portugues':'sêntâns sentença'},

{'ingles': 'great', 'portugues':'ótimo, excelente, grande'},

{'ingles': 'think', 'portugues':'pensar'},

{'ingles': 'say', 'portugues':'sei'},

{'ingles': 'help', 'portugues':'ajudar'},

{'ingles': 'low', 'portugues':'baixo'},

{'ingles': 'line', 'portugues':'linha, fila'},

{'ingles': 'differ', 'portugues':'diferir'},

{'ingles': 'turn', 'portugues':'tornar, vez'},

{'ingles': 'cause', 'portugues':'causa'},

{'ingles': 'much', 'portugues':'muito'},

{'ingles': 'mean', 'portugues':'meio, significar'},

{'ingles': 'before', 'portugues':'antes'},

{'ingles': 'move', 'portugues':'movimento'},

{'ingles': 'right', 'portugues':'direito'},

{'ingles': 'boy', 'portugues':'garoto'},

{'ingles': 'old', 'portugues':'velho'},

{'ingles': 'too', 'portugues':'também'},

{'ingles': 'same', 'portugues':'mesmo'},

{'ingles': 'tell', 'portugues':'contar'},

{'ingles': 'does', 'portugues':'faz, mesmo'},

{'ingles': 'set', 'portugues':'conjunto, fixar'},

{'ingles': 'three', 'portugues':'três'},

{'ingles': 'want', 'portugues':'querer'},

{'ingles': 'air', 'portugues':'ar'},

{'ingles': 'well', 'portugues':'bem, poço'},

{'ingles': 'also', 'portugues':'também'},

{'ingles': 'play', 'portugues':'peça, tocar'},

{'ingles': 'small', 'portugues':'pequeno'},

{'ingles': 'end', 'portugues':'fim, finalizar'},

{'ingles': 'put', 'portugues':'por'},

{'ingles': 'home', 'portugues':'casa'},

{'ingles': 'read', 'portugues':'ler, lido'},

{'ingles': 'hand', 'portugues':'mão'},

{'ingles': 'port', 'portugues':'porto'},

{'ingles': 'large', 'portugues':'grande'},

{'ingles': 'spell', 'portugues':'soletrar, encanto'},

{'ingles': 'add', 'portugues':'adicionar'},

{'ingles': 'even', 'portugues':'mesmo'},

{'ingles': 'land', 'portugues':'terra'},

{'ingles': 'here', 'portugues':'aqui'},

{'ingles': 'must', 'portugues':'dever'},

{'ingles': 'big', 'portugues':'grande'},

{'ingles': 'high', 'portugues':'alto such'},

{'ingles': 'follow', 'portugues':'seguir'},

{'ingles': 'act', 'portugues':'ato, agir'},

{'ingles': 'why', 'portugues':'porque'},

{'ingles': 'ask', 'portugues':'pedir, perguntar'},

{'ingles': 'men', 'portugues':'homens'},

{'ingles': 'change', 'portugues':'mudar'},

{'ingles': 'went', 'portugues':'foi'},

{'ingles': 'light', 'portugues':'leve, luz'},

{'ingles': 'kind', 'portugues':'bom, tipo'},

{'ingles': 'off', 'portugues':'por, desligado'},

{'ingles': 'need', 'portugues':'precisar'},

{'ingles': 'house', 'portugues':'casa'},

{'ingles': 'picture', 'portugues':'foto, filme'},

{'ingles': 'try', 'portugues':'tentar'},

{'ingles': 'us', 'portugues':'nos'},

{'ingles': 'again', 'portugues':'novamente'},

{'ingles': 'animal', 'portugues':'animal'},

{'ingles': 'point', 'portugues':'ponto'},

{'ingles': 'mother', 'portugues':'mãe'},

{'ingles': 'world', 'portugues':'mundo'},

{'ingles': 'near', 'portugues':'perto'},

{'ingles': 'build', 'portugues':'construir'},

{'ingles': 'self', 'portugues':'próprio, ego'},

{'ingles': 'earth', 'portugues':'terra'},

{'ingles': 'father', 'portugues':'pai'},

{'ingles': 'head', 'portugues':'cabeça'},

{'ingles': 'stand', 'portugues':'permanecer, de-pé, banca'},

{'ingles': 'own', 'portugues':'próprio'},

{'ingles': 'page', 'portugues':'página'},

{'ingles': 'should', 'portugues':'deveria'},

{'ingles': 'country', 'portugues':'país'},

{'ingles': 'found', 'portugues':'encontrado, fundar'},

{'ingles': 'answer', 'portugues':'resposta'},

{'ingles': 'school', 'portugues':'escola'},

{'ingles': 'grow', 'portugues':'crescer'},

{'ingles': 'study', 'portugues':'estudo'},

{'ingles': 'still', 'portugues':'até, calmo'},

{'ingles': 'learn', 'portugues':'aprender'},

{'ingles': 'plant', 'portugues':'planta, fábrica'},

{'ingles': 'cover', 'portugues':'cobrir'},

{'ingles': 'food', 'portugues':'comida'},

{'ingles': 'sun', 'portugues':'sol'},

{'ingles': 'four', 'portugues':'quatro'},

{'ingles': 'between', 'portugues':'entre'},

{'ingles': 'state', 'portugues':'estado'},

{'ingles': 'keep', 'portugues':'guardar'},

{'ingles': 'eye', 'portugues':'olho'},

{'ingles': 'never', 'portugues':'nunca'},

{'ingles': 'last', 'portugues':'último, durar'},

{'ingles': 'let', 'portugues':'deixar'},

{'ingles': 'thought', 'portugues':'pensamento, pensado'},

{'ingles': 'city', 'portugues':'cidade'},

{'ingles': 'tree', 'portugues':'árvore'},

{'ingles': 'cross', 'portugues':'cruz, cruzar'},

{'ingles': 'farm', 'portugues':'fazenda'},

{'ingles': 'hard', 'portugues':'duro'},

{'ingles': 'start', 'portugues':'começar'},

{'ingles': 'might', 'portugues':'poder, poderia'},

{'ingles': 'story', 'portugues':'história, andar'},

{'ingles': 'saw', 'portugues':'viu, serra'},

{'ingles': 'far', 'portugues':'longe'},

{'ingles': 'sea', 'portugues':'mar'},

{'ingles': 'draw', 'portugues':'desenhar'},

{'ingles': 'left', 'portugues':'esquerda'},

{'ingles': 'late', 'portugues':'tarde'},

{'ingles': 'run', 'portugues':'correr'},



{'ingles': 'while', 'portugues':'enquanto'},

{'ingles': 'press', 'portugues':'pressão'},

{'ingles': 'close', 'portugues':'fechar'},

{'ingles': 'night', 'portugues':'noite'},

{'ingles': 'real', 'portugues':'real'},

{'ingles': 'life', 'portugues':'vida'},

{'ingles': 'few', 'portugues':'alguns'},

{'ingles': 'north', 'portugues':'norte'},

{'ingles': 'open', 'portugues':'aberto'},

{'ingles': 'seem', 'portugues':'parecer'},

{'ingles': 'together', 'portugues':'juntos'},

{'ingles': 'next', 'portugues':'próximo'},

{'ingles': 'white', 'portugues':'branco'},

{'ingles': 'children', 'portugues':'crianças'},

{'ingles': 'begin', 'portugues':'começar'},

{'ingles': 'got', 'portugues':'obteve'},

{'ingles': 'walk', 'portugues':'andar'},

{'ingles': 'example', 'portugues':'exemplo'},

{'ingles': 'ease', 'portugues':'facilitar'},

{'ingles': 'paper', 'portugues':'papel'},

{'ingles': 'group', 'portugues':'grupo'},

{'ingles': 'always', 'portugues':'sempre'},

{'ingles': 'music', 'portugues':'música'},

{'ingles': 'those', 'portugues':'aqueles'},

{'ingles': 'both', 'portugues':'ambos'},

{'ingles': 'mark', 'portugues':'marcar'},

{'ingles': 'often', 'portugues':'frequentemente'},

{'ingles': 'letter', 'portugues':'letra'},

{'ingles': 'until', 'portugues':'até'},

{'ingles': 'mile', 'portugues':'milha'},

{'ingles': 'river', 'portugues':'rio'},

{'ingles': 'car', 'portugues':'carro'},

{'ingles': 'feet', 'portugues':'pés'},

{'ingles': 'care', 'portugues':'cuidado'},

{'ingles': 'second', 'portugues':'segundo'},

{'ingles': 'book', 'portugues':'livro'},

{'ingles': 'carry', 'portugues':'carregar'},

{'ingles': 'took', 'portugues':'pego'},

{'ingles': 'science', 'portugues':'ciência'},

{'ingles': 'eat', 'portugues':'comer'},

{'ingles': 'room', 'portugues':'quarto'},

{'ingles': 'friend', 'portugues':'amigo'},

{'ingles': 'sight', 'portugues':'visão'},

{'ingles': 'began', 'portugues':'começado'},

{'ingles': 'idea', 'portugues':'idéia'},

{'ingles': 'fish', 'portugues':'peixe'},

{'ingles': 'mountain', 'portugues':'montanha'},

{'ingles': 'stop', 'portugues':'parar'},

{'ingles': 'once', 'portugues':'uma-vez'},

{'ingles': 'base', 'portugues':'base'},

{'ingles': 'hear', 'portugues':'ouvir'},

{'ingles': 'horse', 'portugues':'cavalo'},

{'ingles': 'cut', 'portugues':'cortar'},

{'ingles': 'sure', 'portugues':'certo'},

{'ingles': 'watch', 'portugues':'assistir, relógio'},

{'ingles': 'color', 'portugues':'cor, colorir'},

{'ingles': 'face', 'portugues':'rosto'},

{'ingles': 'wood', 'portugues':'madeira'},

{'ingles': 'main', 'portugues':'principal'},

{'ingles': 'enough', 'portugues':'bastante'},

{'ingles': 'plain', 'portugues':'plano, simples'},

{'ingles': 'girl', 'portugues':'garota'},

{'ingles': 'usual', 'portugues':'usual, comum'},

{'ingles': 'young', 'portugues':'jovem'},

{'ingles': 'ready', 'portugues':'pronto'},

{'ingles': 'above', 'portugues':'acima'},

{'ingles': 'ever', 'portugues':'sempre, já'},

{'ingles': 'red', 'portugues':'vermelho'},

{'ingles': 'list', 'portugues':'lista'},

{'ingles': 'though', 'portugues':'embora'},

{'ingles': 'feel', 'portugues':'sentir'},

{'ingles': 'talk', 'portugues':'conversar'},

{'ingles': 'bird', 'portugues':'pássaro'},

{'ingles': 'soon', 'portugues':'logo'},

{'ingles': 'body', 'portugues':'corpo'},

{'ingles': 'dog', 'portugues':'cachorro'},

{'ingles': 'family', 'portugues':'família'},

{'ingles': 'direct', 'portugues':'direto'},

{'ingles': 'pose', 'portugues':'posição'},

{'ingles': 'leave', 'portugues':'deixar'},

{'ingles': 'song', 'portugues':'canção'},

{'ingles': 'measure', 'portugues':'medida'},

{'ingles': 'door', 'portugues':'porta'},

{'ingles': 'product', 'portugues':'produto'},

{'ingles': 'black', 'portugues':'negro'},

{'ingles': 'short', 'portugues':'curto'},

{'ingles': 'numeral', 'portugues':'numeral'},

{'ingles': 'class', 'portugues':'classe'},

{'ingles': 'wind', 'portugues':'vento'},

{'ingles': 'question', 'portugues':'questão, pergunta'},

{'ingles': 'happen', 'portugues':'acontecer'},

{'ingles': 'complete', 'portugues':'completo'},

{'ingles': 'ship', 'portugues':'navio, embarcar'},

{'ingles': 'area', 'portugues':'área'},

{'ingles': 'half', 'portugues':'metade'},

{'ingles': 'rock', 'portugues':'roque, rocha'},

{'ingles': 'order', 'portugues':'ordem, pedido'},

{'ingles': 'fire', 'portugues':'fogo'},

{'ingles': 'south', 'portugues':'sul'},

{'ingles': 'problem', 'portugues':'problema'},

{'ingles': 'piece', 'portugues':'peça, pedaço'},

{'ingles': 'told', 'portugues':'contado'},

{'ingles': 'knew', 'portugues':'sabido'},

{'ingles': 'pass', 'portugues':'passar'},

{'ingles': 'since', 'portugues':'desde'},

{'ingles': 'top', 'portugues':'topo, principal'},

{'ingles': 'whole', 'portugues':'inteiro'},

{'ingles': 'king', 'portugues':'rei'},

{'ingles': 'space', 'portugues':'espaço'},

{'ingles': 'heard', 'portugues':'ouvido'},

{'ingles': 'best', 'portugues':'melhor'},

{'ingles': 'hour', 'portugues':'hora'},

{'ingles': 'better', 'portugues':'melhor'},

{'ingles': 'true', 'portugues':'verdadeiro'},

{'ingles': 'during', 'portugues':'durante'},

{'ingles': 'hundred', 'portugues':'cem'},

{'ingles': 'five', 'portugues':'cinco'},

{'ingles': 'remember', 'portugues':'lembrar'},

{'ingles': 'step', 'portugues':'passo'},

{'ingles': 'early', 'portugues':'cedo'},

{'ingles': 'hold', 'portugues':'guardar'},

{'ingles': 'west', 'portugues':'oeste'},

{'ingles': 'ground', 'portugues':'terra, amolado'},

{'ingles': 'interest', 'portugues':'interesse'},

{'ingles': 'reach', 'portugues':'alcançar'},

{'ingles': 'fast', 'portugues':'rápido'},

{'ingles': 'verb', 'portugues':'verbo'},

{'ingles': 'sing', 'portugues':'cantar'},

{'ingles': 'listen', 'portugues':'ouvir'},

{'ingles': 'six', 'portugues':'seis'},

{'ingles': 'table', 'portugues':'mesa, tabela'},

{'ingles': 'travel', 'portugues':'viajar'},

{'ingles': 'less', 'portugues':'menos'},

{'ingles': 'morning', 'portugues':'manhã'},

{'ingles': 'ten', 'portugues':'dez'},

{'ingles': 'simple', 'portugues':'simples'},

{'ingles': 'several', 'portugues':'vários'},

{'ingles': 'vowel', 'portugues':'vogal'},

{'ingles': 'toward', 'portugues':'para'},

{'ingles': 'war', 'portugues':'guerra'},

{'ingles': 'lay', 'portugues':'deitar, amador'},

{'ingles': 'against', 'portugues':'contra'},

{'ingles': 'pattern', 'portugues':'padrão'},

{'ingles': 'slow', 'portugues':'devagar'},

{'ingles': 'center', 'portugues':'centro'},

{'ingles': 'love', 'portugues':'amor, amar'},

{'ingles': 'person', 'portugues':'pessoa'},

{'ingles': 'money', 'portugues':'dinheiro'},

{'ingles': 'serve', 'portugues':'servir'},

{'ingles': 'appear', 'portugues':'aparecer'},

{'ingles': 'road', 'portugues':'estrada'},

{'ingles': 'map', 'portugues':'mapa'},

{'ingles': 'rain', 'portugues':'chuva'},

{'ingles': 'rule', 'portugues':'régua, regra'},

{'ingles': 'govern', 'portugues':'governar'},

{'ingles': 'pull', 'portugues':'puxar'},

{'ingles': 'cold', 'portugues':'frio'},

{'ingles': 'notice', 'portugues':'aviso'},

{'ingles': 'voice', 'portugues':'voz'},

{'ingles': 'unit', 'portugues':'unidade'},

{'ingles': 'power', 'portugues':'poder, força'},

{'ingles': 'town', 'portugues':'municipal'},

{'ingles': 'fine', 'portugues':'bom, excelente'},

{'ingles': 'certain', 'portugues':'certo'},

{'ingles': 'fly', 'portugues':'voar, mosca'},

{'ingles': 'fall', 'portugues':'cair, queda, outono'},

{'ingles': 'lead', 'portugues':'levar, chumbo'},

{'ingles': 'cry', 'portugues':'choro, chorar'},

{'ingles': 'dark', 'portugues':'escuro'},

{'ingles': 'machine', 'portugues':'máquina'},

{'ingles': 'note', 'portugues':'anotar'},

{'ingles': 'wait', 'portugues':'esperar'},

{'ingles': 'plan', 'portugues':'plano'},

{'ingles': 'figure', 'portugues':'figura, imaginar'},

{'ingles': 'star', 'portugues':'estrela'},

{'ingles': 'box', 'portugues':'caixa'},

{'ingles': 'noun', 'portugues':'substantivo'},

{'ingles': 'field', 'portugues':'campo'},

{'ingles': 'rest', 'portugues':'resto, descanso'},

{'ingles': 'correct', 'portugues':'correto'},

{'ingles': 'able', 'portugues':'capaz'},

{'ingles': 'pound', 'portugues':'libra'},

{'ingles': 'done', 'portugues':'feito'},

{'ingles': 'beauty', 'portugues':'beleza'},

{'ingles': 'drive', 'portugues':'direção, dirigir'},

{'ingles': 'stood', 'portugues':'permanecido'},

{'ingles': 'contain', 'portugues':'conter'},

{'ingles': 'front', 'portugues':'frente'},

{'ingles': 'teach', 'portugues':'ensinar'},

{'ingles': 'week', 'portugues':'semana'},

{'ingles': 'final', 'portugues':'final'},

{'ingles': 'gave', 'portugues':'dado'},

{'ingles': 'green', 'portugues':'verde'},

{'ingles': 'oh', 'portugues':'ó'},

{'ingles': 'quick', 'portugues':'rápido'},

{'ingles': 'develop', 'portugues':'desenvolver'},

{'ingles': 'ocean', 'portugues':'oceano'},

{'ingles': 'warm', 'portugues':'quente'},

{'ingles': 'free', 'portugues':'livre, grátis'},

{'ingles': 'minute', 'portugues':'minuto'},

{'ingles': 'strong', 'portugues':'forte'},

{'ingles': 'special', 'portugues':'especial'},

{'ingles': 'mind', 'portugues':'mente'},

{'ingles': 'behind', 'portugues':'atrás'},

{'ingles': 'clear', 'portugues':'claro'},

{'ingles': 'tail', 'portugues':'rabo'},

{'ingles': 'produce', 'portugues':'produção'},

{'ingles': 'fact', 'portugues':'fato'},

{'ingles': 'street', 'portugues':'rua'},

{'ingles': 'inch', 'portugues':'polegada'},

{'ingles': 'multiply', 'portugues':'multiplicar'},

{'ingles': 'nothing', 'portugues':'nada'},

{'ingles': 'course', 'portugues':'curso'},

{'ingles': 'stay', 'portugues':'ficar'},

{'ingles': 'wheel', 'portugues':'roda'},

{'ingles': 'full', 'portugues':'cheio'},

{'ingles': 'force', 'portugues':'força, forçar'},

{'ingles': 'blue', 'portugues':'azul'},

{'ingles': 'object', 'portugues':'objeto'},

{'ingles': 'decide', 'portugues':'decidir'},

{'ingles': 'surface', 'portugues':'superficie'},

{'ingles': 'deep', 'portugues':'profundo'},

{'ingles': 'moon', 'portugues':'lua'},

{'ingles': 'island', 'portugues':'ilha'},

{'ingles': 'foot', 'portugues':'pé'},

{'ingles': 'system', 'portugues':'sistema'},

{'ingles': 'busy', 'portugues':'ocupado'},

{'ingles': 'test', 'portugues':'teste'},

{'ingles': 'record', 'portugues':'recorde, gravar, registro'},

{'ingles': 'boat', 'portugues':'barco'},

{'ingles': 'common', 'portugues':'comum'},

{'ingles': 'gold', 'portugues':'ouro'},

{'ingles': 'possible', 'portugues':'possível'},

{'ingles': 'plane', 'portugues':'avião'},

{'ingles': 'stead', 'portugues':'local'},

{'ingles': 'dry', 'portugues':'seco'},

{'ingles': 'wonder', 'portugues':'admirar'},

{'ingles': 'laugh', 'portugues':'rir'},

{'ingles': 'thousand', 'portugues':'mil'},

{'ingles': 'ago', 'portugues':'atrás'},

{'ingles': 'ran', 'portugues':'corrido'},

{'ingles': 'check', 'portugues':'cheque, checagem'},

{'ingles': 'game', 'portugues':'jogo'},

{'ingles': 'shape', 'portugues':'forma'},

{'ingles': 'equate', 'portugues':'equacionar'},

{'ingles': 'miss', 'portugues':'sentir, senhorita'},

{'ingles': 'brought', 'portugues':'trazido'},

{'ingles': 'heat', 'portugues':'calor'},

{'ingles': 'snow', 'portugues':'neve'},

{'ingles': 'tire', 'portugues':'pneu, cansar'},

{'ingles': 'bring', 'portugues':'trazer'},

{'ingles': 'yes', 'portugues':'sim'},

{'ingles': 'distant', 'portugues':'distante'},

{'ingles': 'fill', 'portugues':'encher'},

{'ingles': 'east', 'portugues':'leste'},

{'ingles': 'paint', 'portugues':'pintar'},

{'ingles': 'language', 'portugues':'língua'},

{'ingles': 'among', 'portugues':'entre'},

{'ingles': 'grand', 'portugues':'grandioso'},

{'ingles': 'ball', 'portugues':'bola'},

{'ingles': 'yet', 'portugues':'ainda, já'},

{'ingles': 'wave', 'portugues':'onda'},

{'ingles': 'drop', 'portugues':'gota'},

{'ingles': 'heart', 'portugues':'coração'},

{'ingles': 'am', 'portugues':'sou, estou'},

{'ingles': 'present', 'portugues':'presente'},

{'ingles': 'heavy', 'portugues':'pesado'},

{'ingles': 'dance', 'portugues':'dança'},

{'ingles': 'engine', 'portugues':'motor'},

{'ingles': 'position', 'portugues':'posição'},

{'ingles': 'arm', 'portugues':'braço'},

{'ingles': 'wide', 'portugues':'amplo'},

{'ingles': 'sail', 'portugues':'vela'},

{'ingles': 'material', 'portugues':'material'},

{'ingles': 'size', 'portugues':'tamanho'},

{'ingles': 'vary', 'portugues':'variar'},

{'ingles': 'settle', 'portugues':'estabelecer'},

{'ingles': 'speak', 'portugues':'falar'},

{'ingles': 'weight', 'portugues':'peso'},

{'ingles': 'general', 'portugues':'general, geral'},

{'ingles': 'ice', 'portugues':'gelo'},

{'ingles': 'matter', 'portugues':'matéria, importam'},

{'ingles': 'circle', 'portugues':'círculo'},

{'ingles': 'pair', 'portugues':'par'},

{'ingles': 'include', 'portugues':'incluir'},

{'ingles': 'divide', 'portugues':'dividir'},

{'ingles': 'syllable', 'portugues':'sílaba'},

{'ingles': 'felt', 'portugues':'sentido'},

{'ingles': 'perhaps', 'portugues':'talvez'},

{'ingles': 'pick', 'portugues':'escolher, apanhar'},

{'ingles': 'sudden', 'portugues':'imprevisto'},

{'ingles': 'count', 'portugues':'contar, contagem, conde'},

{'ingles': 'square', 'portugues':'quadrado, praça'},

{'ingles': 'reason', 'portugues':'razão'},

{'ingles': 'length', 'portugues':'comprimento'},

{'ingles': 'represent', 'portugues':'representar'},

{'ingles': 'art', 'portugues':'arte'},

{'ingles': 'subject', 'portugues':'sujeito, assunto'},

{'ingles': 'region', 'portugues':'região'},

{'ingles': 'energy', 'portugues':'energia'},

{'ingles': 'hunt', 'portugues':'caçar'},

{'ingles': 'probable', 'portugues':'provável'},

{'ingles': 'bed', 'portugues':'cama'},

{'ingles': 'brother', 'portugues':'irmão'},

{'ingles': 'egg', 'portugues':'ovo'},

{'ingles': 'ride', 'portugues':'passeio'},

{'ingles': 'cell', 'portugues':'cela, célula'},

{'ingles': 'believe', 'portugues':'acreditar'},

{'ingles': 'fraction', 'portugues':'fração'},

{'ingles': 'forest', 'portugues':'floresta'},

{'ingles': 'sit', 'portugues':'sentar'},

{'ingles': 'race', 'portugues':'raça, corrida'},

{'ingles': 'window', 'portugues':'janela'},

{'ingles': 'store', 'portugues':'armazém'},

{'ingles': 'summer', 'portugues':'verão'},

{'ingles': 'train', 'portugues':'trem, treinar'},

{'ingles': 'sleep', 'portugues':'dormir'},

{'ingles': 'prove', 'portugues':'provar'},

{'ingles': 'lone', 'portugues':'só'},

{'ingles': 'leg', 'portugues':'perna'},

{'ingles': 'exercise', 'portugues':'exercício'},

{'ingles': 'wall', 'portugues':'parede'},

{'ingles': 'catch', 'portugues':'pegar'},

{'ingles': 'mount', 'portugues':'monte, montar'},

{'ingles': 'wish', 'portugues':'desejo'},

{'ingles': 'sky', 'portugues':'céu'},

{'ingles': 'board', 'portugues':'quadro'},

{'ingles': 'joy', 'portugues':'alegria'},

{'ingles': 'winter', 'portugues':'inverno'},

{'ingles': 'sat', 'portugues':'sentado'},

{'ingles': 'written', 'portugues':'escrito'},

{'ingles': 'wild', 'portugues':'selvagem'},

{'ingles': 'instrument', 'portugues':'instrumento'},

{'ingles': 'kept', 'portugues':'guardado'},

{'ingles': 'glass', 'portugues':'vidro'},

{'ingles': 'grass', 'portugues':'grama'},

{'ingles': 'cow', 'portugues':'vaca'},

{'ingles': 'job', 'portugues':'trabalho'},

{'ingles': 'edge', 'portugues':'canto'},

{'ingles': 'sign', 'portugues':'sinal'},

{'ingles': 'visit', 'portugues':'visita'},

{'ingles': 'past', 'portugues':'passado'},

{'ingles': 'soft', 'portugues':'macio'},

{'ingles': 'fun', 'portugues':'alegria'},

{'ingles': 'bright', 'portugues':'claro'},

{'ingles': 'gas', 'portugues':'gás, gasolina'},

{'ingles': 'weather', 'portugues':'tempo'},

{'ingles': 'month', 'portugues':'mês'},

{'ingles': 'million', 'portugues':'milhão'},

{'ingles': 'bear', 'portugues':'urso, carregar'},

{'ingles': 'finish', 'portugues':'fim, finalizar'},

{'ingles': 'happy', 'portugues':'feliz'},

{'ingles': 'hope', 'portugues':'esperança'},

{'ingles': 'flower', 'portugues':'flor'},

{'ingles': 'clothe', 'portugues':'vestir'},

{'ingles': 'strange', 'portugues':'estranho'},

{'ingles': 'gone', 'portugues':'ido'},

{'ingles': 'jump', 'portugues':'pular'},

{'ingles': 'baby', 'portugues':'bebê'},

{'ingles': 'eight', 'portugues':'oito'},

{'ingles': 'village', 'portugues':'vila'},

{'ingles': 'meet', 'portugues':'encontrar'},

{'ingles': 'root', 'portugues':'raiz'},

{'ingles': 'buy', 'portugues':'comprar'},

{'ingles': 'raise', 'portugues':'levantar'},

{'ingles': 'solve', 'portugues':'resolver'},

{'ingles': 'metal', 'portugues':'metal'},

{'ingles': 'whether', 'portugues':'se'},

{'ingles': 'push', 'portugues':'empurrar, iniciativa'},

{'ingles': 'seven', 'portugues':'sete'},

{'ingles': 'paragraph', 'portugues':'parágrafo'},

{'ingles': 'third', 'portugues':'terceiro'},

{'ingles': 'shall', 'portugues':'vai'},

{'ingles': 'held', 'portugues':'guardado'},

{'ingles': 'hair', 'portugues':'cabelo'},

{'ingles': 'describe', 'portugues':'descrever'},

{'ingles': 'cook', 'portugues':'cozinhar'},

{'ingles': 'floor', 'portugues':'chão, derrotar'},

{'ingles': 'either', 'portugues':'um, ou outro, também'},

{'ingles': 'result', 'portugues':'resultado'},

{'ingles': 'burn', 'portugues':'queimar'},

{'ingles': 'hill', 'portugues':'colina'},

{'ingles': 'safe', 'portugues':'seguro, cofre'},

{'ingles': 'cat', 'portugues':'gato'},

{'ingles': 'century', 'portugues':'século'},

{'ingles': 'consider', 'portugues':'considerar'},

{'ingles': 'type', 'portugues':'tipo, datilografar'},

{'ingles': 'law', 'portugues':'lei'},

{'ingles': 'bit', 'portugues':'pouco, broca'},

{'ingles': 'coast', 'portugues':'costa, litoral'},

{'ingles': 'copy', 'portugues':'copiar'},

{'ingles': 'phrase', 'portugues':'frase'},

{'ingles': 'silent', 'portugues':'silencio'},

{'ingles': 'tall', 'portugues':'alto'},

{'ingles': 'sand', 'portugues':'areia'},

{'ingles': 'soil', 'portugues':'solo'},

{'ingles': 'roll', 'portugues':'giro, lista'},

{'ingles': 'temperature', 'portugues':'temperatura'},

{'ingles': 'finger', 'portugues':'dedo'},

{'ingles': 'industry', 'portugues':'indústria'},

{'ingles': 'value', 'portugues':'valor'},

{'ingles': 'fight', 'portugues':'luta'},

{'ingles': 'lie', 'portugues':'deitar, mentir'},

{'ingles': 'beat', 'portugues':'bater'},

{'ingles': 'excite', 'portugues':'instigar'},

{'ingles': 'natural', 'portugues':'natural'},

{'ingles': 'view', 'portugues':'vista'},

{'ingles': 'sense', 'portugues':'sentido'},

{'ingles': 'ear', 'portugues':'orelha, espiga'},

{'ingles': 'else', 'portugues':'outro'},

{'ingles': 'quite', 'portugues':'muito'},

{'ingles': 'broke', 'portugues':'quebrado'},

{'ingles': 'case', 'portugues':'caso, embalagem'},

{'ingles': 'middle', 'portugues':'meio'},

{'ingles': 'kill', 'portugues':'matar'},

{'ingles': 'son', 'portugues':'filho'},

{'ingles': 'lake', 'portugues':'lago'},

{'ingles': 'moment', 'portugues':'momento'},

{'ingles': 'scale', 'portugues':'escada, escala, escama'},

{'ingles': 'loud', 'portugues':'som alto'},

{'ingles': 'spring', 'portugues':'primavera, mola'},

{'ingles': 'observe', 'portugues':'observar'},

{'ingles': 'child', 'portugues':'criança'},

{'ingles': 'straight', 'portugues':'reto'},

{'ingles': 'consonant', 'portugues':'consoante'},

{'ingles': 'nation', 'portugues':'nação'},

{'ingles': 'dictionary', 'portugues':'dicionário'},

{'ingles': 'milk', 'portugues':'leite'},

{'ingles': 'speed', 'portugues':'velocidade'},

{'ingles': 'method', 'portugues':'método'},

{'ingles': 'organ', 'portugues':'órgão'},

{'ingles': 'pay', 'portugues':'pagar'},

{'ingles': 'age', 'portugues':'idade'},

{'ingles': 'section', 'portugues':'seção'},

{'ingles': 'dress', 'portugues':'vestido'},

{'ingles': 'cloud', 'portugues':'nuvem'},

{'ingles': 'surprise', 'portugues':'surpresa'},

{'ingles': 'quiet', 'portugues':'quieto'},

{'ingles': 'stone', 'portugues':'pedra'},

{'ingles': 'tiny', 'portugues':'minúsculo'},

{'ingles': 'climb', 'portugues':'escalar'},

{'ingles': 'cool', 'portugues':'frio'},

{'ingles': 'design', 'portugues':'desenho'},

{'ingles': 'poor', 'portugues':'pobre'},

{'ingles': 'lot', 'portugues':'muito, lote'},

{'ingles': 'experiment', 'portugues':'experimento'},

{'ingles': 'bottom', 'portugues':'baixo'},

{'ingles': 'key', 'portugues':'chave'},

{'ingles': 'iron', 'portugues':'ferro'},

{'ingles': 'single', 'portugues':'só, solteiro'},

{'ingles': 'stick', 'portugues':'vareta, fincar'},

{'ingles': 'flat', 'portugues':'achatado, plano'},

{'ingles': 'twenty', 'portugues':'vinte'},

{'ingles': 'skin', 'portugues':'pele'},

{'ingles': 'smile', 'portugues':'sorriso'},

{'ingles': 'crease', 'portugues':'ruga'},

{'ingles': 'hole', 'portugues':'buraco'},

{'ingles': 'trade', 'portugues':'comércio'},

{'ingles': 'melody', 'portugues':'melodia'},

{'ingles': 'trip', 'portugues':'viajar, passeio'},

{'ingles': 'office', 'portugues':'escritório, função'},

{'ingles': 'receive', 'portugues':'receber'},

{'ingles': 'row', 'portugues':'remar, fila'},

{'ingles': 'mouth', 'portugues':'boca'},

{'ingles': 'exact', 'portugues':'exato'},

{'ingles': 'symbol', 'portugues':'símbol'},

{'ingles': 'die', 'portugues':'morrer'},

{'ingles': 'least', 'portugues':'menos'},

{'ingles': 'trouble', 'portugues':'preocupação'},

{'ingles': 'shout', 'portugues':'gritar'},

{'ingles': 'except', 'portugues':'exceto'},

{'ingles': 'wrote', 'portugues':'escrito'},

{'ingles': 'seed', 'portugues':'semente'},

{'ingles': 'tone', 'portugues':'tom'},

{'ingles': 'join', 'portugues':'juntar'},

{'ingles': 'suggest', 'portugues':'sugerir'},

{'ingles': 'clean', 'portugues':'limpo'},

{'ingles': 'break', 'portugues':'quebrar'},

{'ingles': 'lady', 'portugues':'dama'},

{'ingles': 'yard', 'portugues':'jarda, quintal'},

{'ingles': 'rise', 'portugues':'levantar'},

{'ingles': 'bad', 'portugues':'mal'},

{'ingles': 'blow', 'portugues':'assoprar'},

{'ingles': 'oil', 'portugues':'óleo, petróleo'},

{'ingles': 'blood', 'portugues':'sangue'},

{'ingles': 'touch', 'portugues':'tocar'},

{'ingles': 'grew', 'portugues':'crescido'},

{'ingles': 'cent', 'portugues':'centavo'},

{'ingles': 'mix', 'portugues':'mistura'},

{'ingles': 'team', 'portugues':'grupo'},

{'ingles': 'wire', 'portugues':'arame'},

{'ingles': 'cost', 'portugues':'custo'},

{'ingles': 'lost', 'portugues':'perdido'},

{'ingles': 'brown', 'portugues':'marrom'},

{'ingles': 'wear', 'portugues':'usar'},

{'ingles': 'garden', 'portugues':'jardim'},

{'ingles': 'equal', 'portugues':'igual'},

{'ingles': 'sent', 'portugues':'enviado'},

{'ingles': 'choose', 'portugues':'escolher'},

{'ingles': 'fell', 'portugues':'caido'},

{'ingles': 'fit', 'portugues':'ajustado'},

{'ingles': 'flow', 'portugues':'correr, corrente'},

{'ingles': 'fair', 'portugues':'feira, claro'},

{'ingles': 'bank', 'portugues':'banco'},

{'ingles': 'collect', 'portugues':'recolher, pagar'},

{'ingles': 'save', 'portugues':'salvar'},

{'ingles': 'control', 'portugues':'controle'},

{'ingles': 'decimal', 'portugues':'decimal'},

{'ingles': 'gentle', 'portugues':'gentil'},

{'ingles': 'woman', 'portugues':'mulher'},

{'ingles': 'captain', 'portugues':'capitão'},

{'ingles': 'practice', 'portugues':'prática'},

{'ingles': 'separate', 'portugues':'sepârâtseparado'},

{'ingles': 'difficult', 'portugues':'difícil'},

{'ingles': 'doctor', 'portugues':'doutor'},

{'ingles': 'please', 'portugues':'por-favor'},

{'ingles': 'protect', 'portugues':'proteger'},

{'ingles': 'noon', 'portugues':'meio-dia'},

{'ingles': 'whose', 'portugues':'cujo'},

{'ingles': 'locate', 'portugues':'localizar'},

{'ingles': 'ring', 'portugues':'anel'},

{'ingles': 'character', 'portugues':'caráter, personagem'},

{'ingles': 'insect', 'portugues':'inseto'},

{'ingles': 'caught', 'portugues':'pego'},

{'ingles': 'period', 'portugues':'período'},

{'ingles': 'indicate', 'portugues':'indicar'},

{'ingles': 'radio', 'portugues':'rádio'},

{'ingles': 'spoke', 'portugues':'falado, raio'},

{'ingles': 'atom', 'portugues':'átomo'},

{'ingles': 'human', 'portugues':'humano'},

{'ingles': 'history', 'portugues':'história'},

{'ingles': 'effect', 'portugues':'efeito'},

{'ingles': 'electric', 'portugues':'elétrico'},

{'ingles': 'expect', 'portugues':'esperar'},

{'ingles': 'crop', 'portugues':'colheita'},

{'ingles': 'modern', 'portugues':'moderno'},

{'ingles': 'element', 'portugues':'elemento'},

{'ingles': 'hit', 'portugues':'acertar'},

{'ingles': 'student', 'portugues':'estudante'},

{'ingles': 'corner', 'portugues':'esquina'},

{'ingles': 'party', 'portugues':'partido, festa'},

{'ingles': 'supply', 'portugues':'suprir'},

{'ingles': 'bone', 'portugues':'osso'},

{'ingles': 'rail', 'portugues':'grade, trilho'},

{'ingles': 'imagine', 'portugues':'imaginar'},

{'ingles': 'provide', 'portugues':'fornecer'},

{'ingles': 'agree', 'portugues':'concordar'},

{'ingles': 'thus', 'portugues':'assim'},

{'ingles': 'capital', 'portugues':'capital'},



{'ingles': 'chair', 'portugues':'cadeira'},

{'ingles': 'danger', 'portugues':'perigo'},

{'ingles': 'fruit', 'portugues':'fruta'},

{'ingles': 'rich', 'portugues':'rico'},

{'ingles': 'thick', 'portugues':'grosso'},

{'ingles': 'soldier', 'portugues':'soldado'},

{'ingles': 'process', 'portugues':'processo'},

{'ingles': 'operate', 'portugues':'operar'},

{'ingles': 'guess', 'portugues':'adivinhar'},

{'ingles': 'necessary', 'portugues':'necessário'},

{'ingles': 'sharp', 'portugues':'agudo, sustenido'},

{'ingles': 'wing', 'portugues':'asa'},

{'ingles': 'create', 'portugues':'criar'},

{'ingles': 'neighbor', 'portugues':'vizinho'},

{'ingles': 'wash', 'portugues':'lavar'},

{'ingles': 'bat', 'portugues':'morcego, bastão'},

{'ingles': 'rather', 'portugues':'em-vez-de'},

{'ingles': 'crowd', 'portugues':'multidão'},

{'ingles': 'corn', 'portugues':'milho'},

{'ingles': 'compare', 'portugues':'comparar'},

{'ingles': 'poem', 'portugues':'poema'},

{'ingles': 'string', 'portugues':'corda'},

{'ingles': 'bell', 'portugues':'sino'},

{'ingles': 'depend', 'portugues':'depender'},

{'ingles': 'meat', 'portugues':'carne'},

{'ingles': 'rub', 'portugues':'esfregar'},

{'ingles': 'tube', 'portugues':'tubo, tv'},

{'ingles': 'famous', 'portugues':'famoso'},

{'ingles': 'stream', 'portugues':'corrente'},

{'ingles': 'fear', 'portugues':'medo, temer'},

{'ingles': 'thin', 'portugues':'fino, magro'},

{'ingles': 'triangle', 'portugues':'triângulo'},

{'ingles': 'planet', 'portugues':'planeta'},

{'ingles': 'hurry', 'portugues':'pressa'},

{'ingles': 'chief', 'portugues':'chefe'},

{'ingles': 'clock', 'portugues':'relógio'},

{'ingles': 'mine', 'portugues':'meu, mina'},

{'ingles': 'tie', 'portugues':'amarrar'},

{'ingles': 'enter', 'portugues':'entrar'},

{'ingles': 'major', 'portugues':'maior, major'},

{'ingles': 'fresh', 'portugues':'fresco'},

{'ingles': 'search', 'portugues':'buscar'},

{'ingles': 'send', 'portugues':'enviar'},

{'ingles': 'yellow', 'portugues':'amarelo'},

{'ingles': 'gun', 'portugues':'arma'},

{'ingles': 'rose', 'portugues':'rosa'},

{'ingles': 'allow', 'portugues':'permitir'},

{'ingles': 'print', 'portugues':'imprimir'},

{'ingles': 'dead', 'portugues':'morto'},

{'ingles': 'spot', 'portugues':'ponto'},

{'ingles': 'desert', 'portugues':'deserto'},

{'ingles': 'suit', 'portugues':'terno'},

{'ingles': 'current', 'portugues':'atual'},

{'ingles': 'lift', 'portugues':'levantar'},

{'ingles': 'continue', 'portugues':'continuar'},

{'ingles': 'block', 'portugues':'bloco'},

{'ingles': 'chart', 'portugues':'gráfico'},

{'ingles': 'hat', 'portugues':'chapéu'},

{'ingles': 'sell', 'portugues':'vender'},

{'ingles': 'success', 'portugues':'sucesso'},

{'ingles': 'company', 'portugues':'companhia, empresa'},

{'ingles': 'subtract', 'portugues':'subtrair'},

{'ingles': 'event', 'portugues':'evento'},

{'ingles': 'particular', 'portugues':'especial'},

{'ingles': 'deal', 'portugues':'negócio'},

{'ingles': 'term', 'portugues':'termo, período'},

{'ingles': 'opposite', 'portugues':'oposto'},

{'ingles': 'wife', 'portugues':'esposa'},

{'ingles': 'shoe', 'portugues':'sapato'},

{'ingles': 'shoulder', 'portugues':'ombro'},

{'ingles': 'spread', 'portugues':'espalhar'},

{'ingles': 'arrange', 'portugues':'arranjar'},

{'ingles': 'camp', 'portugues':'campo'},

{'ingles': 'invent', 'portugues':'inventar'},

{'ingles': 'cotton', 'portugues':'algodão'},

{'ingles': 'born', 'portugues':'nascido'},

{'ingles': 'determine', 'portugues':'determinar'},

{'ingles': 'quart', 'portugues':'quarto'},

{'ingles': 'nine', 'portugues':'nove'},

{'ingles': 'truck', 'portugues':'caminhão'},

{'ingles': 'noise', 'portugues':'barulho'},

{'ingles': 'level', 'portugues':'nível'},

{'ingles': 'chance', 'portugues':'chance'},

{'ingles': 'gather', 'portugues':'juntar'},

{'ingles': 'shop', 'portugues':'loja'},

{'ingles': 'stretch', 'portugues':'alcance'},

{'ingles': 'throw', 'portugues':'arremessar'},

{'ingles': 'shine', 'portugues':'brilhar'},

{'ingles': 'property', 'portugues':'propriedade'},

{'ingles': 'column', 'portugues':'coluna'},

{'ingles': 'molecule', 'portugues':'molécula'},

{'ingles': 'select', 'portugues':'selecionar'},

{'ingles': 'wrong', 'portugues':'errado'},

{'ingles': 'gray', 'portugues':'cinza'},

{'ingles': 'repeat', 'portugues':'repetir'},

{'ingles': 'require', 'portugues':'exigir'},

{'ingles': 'broad', 'portugues':'amplo'},

{'ingles': 'prepare', 'portugues':'preparar'},

{'ingles': 'salt', 'portugues':'sal'},

{'ingles': 'nose', 'portugues':'nariz'},

{'ingles': 'plural', 'portugues':'plural'},

{'ingles': 'anger', 'portugues':'raiva'},

{'ingles': 'claim', 'portugues':'clamar'},

{'ingles': 'continent', 'portugues':'continente'},

{'ingles': 'oxygen', 'portugues':'oxigênio'},

{'ingles': 'sugar', 'portugues':'açúcar'},

{'ingles': 'death', 'portugues':'morte'},

{'ingles': 'pretty', 'portugues':'belo, muito'},

{'ingles': 'skill', 'portugues':'habilidade'},

{'ingles': 'women', 'portugues':'mulheres'},

{'ingles': 'season', 'portugues':'estação'},

{'ingles': 'solution', 'portugues':'solução'},

{'ingles': 'magnet', 'portugues':'imã'},

{'ingles': 'silver', 'portugues':'prata'},

{'ingles': 'thank', 'portugues':'agradecer'},

{'ingles': 'branch', 'portugues':'galho'},

{'ingles': 'match', 'portugues':'competição'},

{'ingles': 'suffix', 'portugues':'sufixo'},

{'ingles': 'especially', 'portugues':'especialmente'},

{'ingles': 'fig', 'portugues':'figo'},

{'ingles': 'afraid', 'portugues':'com-medo'},

{'ingles': 'huge', 'portugues':'grande, enorme'},

{'ingles': 'sister', 'portugues':'irmã'},

{'ingles': 'steel', 'portugues':'aço'},

{'ingles': 'discuss', 'portugues':'discutir'},

{'ingles': 'dollar', 'portugues':'dólar'},

{'ingles': 'forward', 'portugues':'adiante'},

{'ingles': 'similar', 'portugues':'semelhante'},

{'ingles': 'guide', 'portugues':'guia, guiar'},

{'ingles': 'experience', 'portugues':'experiência'},

{'ingles': 'score', 'portugues':'placar'},

{'ingles': 'apple', 'portugues':'maçã'},

{'ingles': 'bought', 'portugues':'comprado'},

{'ingles': 'led', 'portugues':'levado'},

{'ingles': 'colony', 'portugues':'colonia'},

{'ingles': 'pitch', 'portugues':'piche, arremeço'},

{'ingles': 'coat', 'portugues':'casaco'},

{'ingles': 'mass', 'portugues':'massa, missa'},

{'ingles': 'card', 'portugues':'cartão'},

{'ingles': 'band', 'portugues':'banda'},

{'ingles': 'rope', 'portugues':'corda'},

{'ingles': 'slip', 'portugues':'escorregar'},

{'ingles': 'win', 'portugues':'ganhar'},

{'ingles': 'dream', 'portugues':'sonho'},

{'ingles': 'evening', 'portugues':'noite'},

{'ingles': 'condition', 'portugues':'condição'},

{'ingles': 'feed', 'portugues':'alimentar'},

{'ingles': 'tool', 'portugues':'ferramenta'},

{'ingles': 'total', 'portugues':'total'},

{'ingles': 'basic', 'portugues':'básico'},

{'ingles': 'smell', 'portugues':'cheiro'},

{'ingles': 'valley', 'portugues':'vale'},

{'ingles': 'nor', 'portugues':'nem'},

{'ingles': 'double', 'portugues':'dobro'},

{'ingles': 'seat', 'portugues':'assento'},

{'ingles': 'arrive', 'portugues':'chegar'},

{'ingles': 'master', 'portugues':'mestre'},

{'ingles': 'track', 'portugues':'trilha'},

{'ingles': 'parent', 'portugues':'pais'},

{'ingles': 'shore', 'portugues':'praia'},

{'ingles': 'division', 'portugues':'divisão'},

{'ingles': 'sheet', 'portugues':'folha, lençol'},

{'ingles': 'substance', 'portugues':'substância'},

{'ingles': 'favor', 'portugues':'favor, favorecer'},

{'ingles': 'connect', 'portugues':'conectar'},

{'ingles': 'post', 'portugues':'pós, posto'},

{'ingles': 'spend', 'portugues':'gastar'},

{'ingles': 'swim', 'portugues':'nadar'},

{'ingles': 'chord', 'portugues':'acorde'},

{'ingles': 'fat', 'portugues':'gordo'},

{'ingles': 'glad', 'portugues':'contente'},

{'ingles': 'original', 'portugues':'original'},

{'ingles': 'share', 'portugues':'parte'},

{'ingles': 'station', 'portugues':'estação'},

{'ingles': 'dad', 'portugues':'papai'},

{'ingles': 'bread', 'portugues':'pão'},

{'ingles': 'charge', 'portugues':'carga, cobrança'},

{'ingles': 'proper', 'portugues':'próprio'},

{'ingles': 'bar', 'portugues':'bar, barra'},

{'ingles': 'offer', 'portugues':'oferecer'},

{'ingles': 'segment', 'portugues':'segmento'},

{'ingles': 'slave', 'portugues':'escravo'},

{'ingles': 'duck', 'portugues':'pato, mergulhar'},

{'ingles': 'instant', 'portugues':'instante'},

{'ingles': 'market', 'portugues':'mercado'},

{'ingles': 'degree', 'portugues':'grau'},

{'ingles': 'populate', 'portugues':'povoar'},

{'ingles': 'chick', 'portugues':'pintinho'},

{'ingles': 'dear', 'portugues':'querido'},

{'ingles': 'enemy', 'portugues':'inimigo'},

{'ingles': 'reply', 'portugues':'resposta'},

{'ingles': 'drink', 'portugues':'bebida'},

{'ingles': 'occur', 'portugues':'ocorrer'},

{'ingles': 'support', 'portugues':'apoiar'},

{'ingles': 'speech', 'portugues':'discurso'},

{'ingles': 'nature', 'portugues':'natureza'},

{'ingles': 'range', 'portugues':'alcance'},

{'ingles': 'steam', 'portugues':'vapor'},

{'ingles': 'motion', 'portugues':'movimento'},

{'ingles': 'path', 'portugues':'caminho'},

{'ingles': 'liquid', 'portugues':'líquido'},

{'ingles': 'log', 'portugues':'registro'},

{'ingles': 'meant', 'portugues':'significado'},

{'ingles': 'quotient', 'portugues':'quociente'},

{'ingles': 'teeth', 'portugues':'dentes'},

{'ingles': 'shell', 'portugues':'concha'},

{'ingles': 'neck', 'portugues':'pescoço'},

{'ingles': 'dessert', 'portugues':'sobremesa'}]
const pergunta = document.querySelector('.pergunta')
const palavrasQueJaForamUsadas = []
let resposta = document.querySelector('#resposta')
const btnDireita = document.querySelector('.btnDireita')
const btnEsquerda = document.querySelector('.btnEsquerda')
let placar = 0
let palavraSorteada
const musicaAcertou = document.querySelector('#musicaAcertou')
const musicaErrou = document.querySelector('#musicaErrou')
const musicaBtn = document.querySelector('#musicaBtn')
const caixaDoPlacar = document.querySelector('.caixaPlacar')
const cxResposta = document.querySelector('.cxResposta')
let acertos = 0
let erros = 0

criaGradeDeElementos()


gradeElementos.forEach(el => el.addEventListener("click",  selecionaElemento))
btnEsquerda.addEventListener('click', moverParaEsquerda)
btnDireita.addEventListener('click', moverParaDireita)




function criaGradeDeElementos() {
    for (let i = 1; i <= 1000; i++) {
        const elemento = document.createElement("div")
        elemento.classList.add("elemento")
        elemento.id = "elemento" + i
        const img = document.createElement("img")
        img.src = "img/interrogacao.png"
        elemento.appendChild(img)
        tabuleiro.appendChild(elemento)
        gradeElementos.push(elemento)
    }
}

let elementoSelecionado = false

function selecionaElemento(event){
    if (elementoSelecionado)return
    cxResposta.innerHTML = ''
    const elementoQuadrado =  event.target
    if(elementoQuadrado.classList.contains('elementoSelecionado'))  return
    if(elementoQuadrado.classList.contains('acertou')||elementoQuadrado.classList.contains('errou')){
        return
    }
    elementoQuadrado.classList.add('elementoSelecionado')
    elementoSelecionado = true
    
    sorteiaPalavras()
    
    criaAlternativasDeResposta()

    function criaAlternativasDeResposta(){
        const alternativaCorreta = palavraSorteada
        let removeAlternativaCorreta = palavrasEmIngles.filter(a => a !== palavraSorteada)
        let alternativasDePalavras = [alternativaCorreta]
            for(let i = 0; i<3; i++){
                let randomIndice = Math.floor(Math.random()*removeAlternativaCorreta.length)
                alternativasDePalavras.push(removeAlternativaCorreta[randomIndice])
            }
            let embaralhaAlternativas = alternativasDePalavras.sort(() => Math.random()-0.5)
            
            embaralhaAlternativas.forEach(alternativa => { const respostaAlternativa = document.createElement('div')
            respostaAlternativa.innerHTML = alternativa.portugues
            respostaAlternativa.classList.add('alternativa')
            cxResposta.appendChild(respostaAlternativa)
    
            cxResposta.addEventListener('click', function(event) {
                if (event.target && event.target.matches('.alternativa')) {
                respostaCorreta(event.target)
                respostaErrada(event.target)
                }
            
            })
            
            function respostaCorreta(alternativaClicada){
                if(elementoQuadrado.classList.contains('acertou'))return
                if(elementoQuadrado.classList.contains('errou'))return
                if(alternativaClicada.textContent === palavraSorteada.portugues){
                    elementoQuadrado.classList.add('acertou')
                    pergunta.innerHTML ='PARABÉNS!<br>	&#128516;&#128077;'
                    elementoSelecionado = false
                    acertos += 1
                    marcaPonto()
                    console.log('acerto'+ acertos)
                }
                
            }

            function respostaErrada(alternativaClicada){
                if(elementoQuadrado.classList.contains('acertou'))return
                if(elementoQuadrado.classList.contains('errou'))return
                if(alternativaClicada.textContent !== palavraSorteada.portugues){
                    elementoQuadrado.classList.add('errou')
                    pergunta.innerHTML = ` ERROU! &#128553; <br>RESPOSTA: ${palavraSorteada.portugues}`
                    musicaErrou.volume = 0.2
                    musicaErrou.play()
                    elementoSelecionado = false
                    erros += 1
                    console.log('erros'+ erros)
                    
                }
            }
        })
        
    }
    
    function marcaPonto(){
        
        placar = acertos
        document.querySelector('.placar').textContent = placar
        musicaAcertou.volume = 0.5
        musicaAcertou.play()
        caixaDoPlacar.classList.add('animaPlacar')
            setTimeout(function(){
                caixaDoPlacar.classList.remove('animaPlacar')
                }, 1000);
                
    }
    
}  



function sorteiaPalavras() {
    if(palavrasEmIngles.length === 0){
        pergunta.innerHTML = "Todas as palavras foram usadas!"
        return
}

    palavraSorteada = palavrasEmIngles[Math.floor(Math.random() * palavrasEmIngles.length)]
    

    pergunta.innerHTML = palavraSorteada.ingles
    
    palavrasQueJaForamUsadas.push(palavraSorteada)
    let numeroIndex = palavrasEmIngles.indexOf(palavraSorteada)
    palavrasEmIngles.splice(numeroIndex, 1)

}





let idIntervalo


function moverParaDireita(){
    if(tabuleiro.scrollLeft + 150 >= 51800)return
        //51800 é o valor da largura do scrollbar
        let posicaoAtual = tabuleiro.scrollLeft
        let novaPosicao = posicaoAtual + 150
        idIntervalo = requestAnimationFrame(frame)
    function frame(){
        if(tabuleiro.scrollLeft >= novaPosicao) {
            cancelAnimationFrame(idIntervalo)
            return
        }
        tabuleiro.scrollTo(tabuleiro.scrollLeft + 5, 0)
        idIntervalo = requestAnimationFrame(frame)
        
    }
    musicaBtn.volume = 0.5
    musicaBtn.play()
    
}


function moverParaEsquerda(){
    if(tabuleiro.scrollLeft - 150 < 0) {
        cancelAnimationFrame(idIntervalo)
        return
    }
    let posicaoAtual = tabuleiro.scrollLeft
    idIntervalo = requestAnimationFrame(frame)
    function frame(){
        let novaPosicao = posicaoAtual - 150
        if(tabuleiro.scrollLeft <= novaPosicao) {
            cancelAnimationFrame(idIntervalo)
            return
        }
        tabuleiro.scrollTo(tabuleiro.scrollLeft - 5, 0)
        idIntervalo = requestAnimationFrame(frame)
    }
    musicaBtn.volume = 0.5
    musicaBtn.play()
}


