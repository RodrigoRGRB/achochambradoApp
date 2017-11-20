
		function sortfunction(a, b){
		  return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
		}

			function calcular(){ 
				var valor = document.getElementById("campo").value;
				var fonte = document.getElementById("fonte").value;
				var titulo = document.getElementById("titulo").value;
				
				//valor = "33 35 35 39 41 41 42 45 47 48 50 52 53 54 55 55 57 59 60 60 61 64 65 65 65 66 66 67 68 69 71 73 73 74 74 76 77 77 78 80 81 84 85 85 88 89 91 94 94 98";
                
				texto = valor.trim();
				
				var res = texto.split(" ");
				
				res.sort(sortfunction);
				
				//tamanho do rol
				rol = res;
				
				tamanho = arrayContar(res);
				
				i = tamanho.length;
				
				var cont = 0;
				w = 0;
				soma = 0;
				xifi = 0;
				somaxifi =0;
				//testando criação de tabela
				var tabela =titulo;
				tabela += '<table id="tabelacss">';
				tabela += '<thead><tr><th>i</th><th>ROL</th><th>f<sub>i</sub></th><th>X<sub>i</sub>F<sub>i</sub></th></thead>';
                
              
				while(w < i){
				tabela += '<tr>';						
					
					cont = tamanho[w][1];
					//soma
					soma = soma+cont;
					fri = cont / rol.length;
					
					xifi = cont * tamanho[w][0]; 
					somaxifi = somaxifi + xifi;
					
					//console.log(w+1+"ºClasse "+control+" |- "+limite+" f =  " + cont + " Fri "+ fri.toFixed(2) + " F " + soma + " FRI "+ sfri.toFixed(2));
					tabela += '<td>'+(w+1)+"</td><td>"+(tamanho[w][0])+"</td><td> " + cont + " </td><td>"+ xifi +"</td>";
					
					//console.log(cont);
					
					
					cont = 0;
					w++;
					
					tabela += '</tr>';
					
				}
				tabela += '<tr><td></td><td></td><td>&Sigma;f<sub>1</sub> = '+soma+'</td><td>&Sigma;X<sub>1</sub>F<sub>i</sub> = '+somaxifi+'</td>';
				
				tabela += '</table> Média Geral = '+somaxifi/soma+"<br>";
				tabela += 'fonte:'+fonte;
				document.getElementById('campoTabela').innerHTML=tabela;
				
			}
			
			
			function arrendondar(numeroRedondo){
				numeroRedondo = Math.round(numeroRedondo);
				
				return numeroRedondo;
			}
			
			
			function arrayContar(res){
			    arr = res;
                linha = [];
                coluna = [];
                
                
                for(x = 0;x<arr.length;x++){
                    //console.log(x);
                    if(x == 0){
                        coluna.push(arr[x]);
                        quantidade = contarValores(arr[x]);
                        coluna.push(quantidade);
                        //console.log(coluna);
                        linha.push(coluna);
                        //console.log(linha);
                        
                    }else{
                        if(linha[linha.length-1][0] != arr[x]){
                            coluna.push(arr[x]);
                            quantidade = contarValores(arr[x]);
                            coluna.push(quantidade);
                            linha.push(coluna);
                        }
                    }
                    
                    coluna = [];
                   
                    
                        
                }
                
                
				return linha;
			}
                             
            function contarValores(numero){
                contador = 0;
                
                for(y =0;y<arr.length;y++){
                    if(numero == arr[y]){
                        contador++
                    }
                }
                        
                return contador;
            }
