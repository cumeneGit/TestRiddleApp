# ビルドステージ
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS build
WORKDIR /app

# .csproj ファイルだけを先にコピー（レイヤーキャッシュ最適化）
COPY TestRiddle/TestRiddle.csproj TestRiddle/
RUN dotnet restore TestRiddle/TestRiddle.csproj

# 残りのコードをコピー
COPY TestRiddle/ TestRiddle/
WORKDIR /src/TestRiddle
RUN dotnet publish -c Release -o /app/out

# 実行ステージ
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app/out .

# ポート指定
EXPOSE 8080

# アプリケーションの起動
ENTRYPOINT ["dotnet", "TestRiddle.dll"]