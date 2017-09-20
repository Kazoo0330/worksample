### lambda(ラムダ)について
Rubyでlambdaを使用する場合、  
```lambda = lambda {} ``` または、  
```lmabda = ->() {} ``` ともできます。  

クラスメソッドを使用すると、lambdaはProcクラスのインスタンスであることがわかると思います。  
```lambda.class```  
```=> Proc. ```

* lambdaとProcの違いについて  
lambdaはメソッドのように動作する一方、Procはブロックのように動作します。　lambdaとProcでは実引数の扱い方が違います。実例を見てみましょう。  

```lambda = -> (hoge) { puts "Hello #{hoge}"}```  

```proc = Proc.new { |hoge| puts "Hello #{hoge}" }```  

<br />
hogeを実引数としてCallメソッドを使用しています。  

```lambda.call("hoge")```  
```=> Hello hoge```  

<br />
```proc.call("hoge")```  
```=> Hello hoge  ```

<br />
ここまでは、lambdaとProcは完全に同じ動作をしています。しかし、実引数をしっかりと渡さなかった場合、違いが出ます。
<br />
```lambda.call()```  
```=> ArgumentError: wrong number of arguments (0 for 1)```  
<br />
```proc.call()```  
```=> Hello  ```

上記の例からわかるように、lambdaにはしっかりと実引数を渡してあげないと、errorになってしまいます。一方Procは、実引数が渡されなかった場合、空欄として認識されます。  
このことから、lambdaが実引数通りに動作するのに対し、Procはlambdaのように厳正な実引数のチェックなしで動作します。  
