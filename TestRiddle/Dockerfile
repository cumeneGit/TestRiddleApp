# ビルドステージ
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS build
WORKDIR /app

# プロジェクトファイルをコピーして復元
COPY *.csproj ./
RUN dotnet restore

# ソースコードをコピーしてビルド
COPY . ./
RUN dotnet publish -c Release -o out

# 実行ステージ
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app/out .

# ポート指定
EXPOSE 8080

# アプリケーションの起動
ENTRYPOINT ["dotnet", "TestRiddle.dll"]