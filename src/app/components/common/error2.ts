// Jan 6 01:33:23 PM  ==> Cloning from https://github.com/dsofi/portfolio-BackEnd...
// Jan 6 01:33:28 PM  ==> Checking out commit 693427fd5bbbcb7c1d4dc60febdd0e522496ecd5 in branch main
// Jan 6 01:33:34 PM  #1 [internal] load .dockerignore
// Jan 6 01:33:34 PM  #1 transferring context: 2B done
// Jan 6 01:33:34 PM  #1 DONE 0.0s
// Jan 6 01:33:34 PM  
// Jan 6 01:33:34 PM  #2 [internal] load build definition from Dockerfile
// Jan 6 01:33:34 PM  #2 transferring dockerfile: 174B done
// Jan 6 01:33:34 PM  #2 DONE 0.0s
// Jan 6 01:33:34 PM  
// Jan 6 01:33:34 PM  #3 [internal] load metadata for docker.io/library/amazoncorretto:19-alpine-jdk
// Jan 6 01:33:34 PM  #3 ...
// Jan 6 01:33:34 PM  
// Jan 6 01:33:34 PM  #4 [auth] library/amazoncorretto:pull token for registry-1.docker.io
// Jan 6 01:33:34 PM  #4 DONE 0.0s
// Jan 6 01:33:34 PM  
// Jan 6 01:33:34 PM  #3 [internal] load metadata for docker.io/library/amazoncorretto:19-alpine-jdk
// Jan 6 01:33:35 PM  #3 DONE 1.1s
// Jan 6 01:33:35 PM  
// Jan 6 01:33:35 PM  #5 [1/2] FROM docker.io/library/amazoncorretto:19-alpine-jdk@sha256:46be4d85ae0f45ee7144fcb0d785907b960ee273f6e3d759b6e0c39bf03e5387
// Jan 6 01:33:35 PM  #5 resolve docker.io/library/amazoncorretto:19-alpine-jdk@sha256:46be4d85ae0f45ee7144fcb0d785907b960ee273f6e3d759b6e0c39bf03e5387 done
// Jan 6 01:33:35 PM  #5 DONE 0.0s
// Jan 6 01:33:35 PM  
// Jan 6 01:33:35 PM  #6 [internal] load build context
// Jan 6 01:33:37 PM  #6 transferring context: 49.25MB 2.1s done
// Jan 6 01:33:37 PM  #6 DONE 2.1s
// Jan 6 01:33:37 PM  
// Jan 6 01:33:37 PM  #5 [1/2] FROM docker.io/library/amazoncorretto:19-alpine-jdk@sha256:46be4d85ae0f45ee7144fcb0d785907b960ee273f6e3d759b6e0c39bf03e5387
// Jan 6 01:33:37 PM  #5 extracting sha256:ca7dd9ec2225f2385955c43b2379305acd51543c28cf1d4e94522b3d94cce3ce 0.3s done
// Jan 6 01:33:39 PM  #5 extracting sha256:b953496144a820faf3b5884ddfc542a98cc07f6a24635f26015e7c8d0ef19efe
// Jan 6 01:33:48 PM  #5 extracting sha256:b953496144a820faf3b5884ddfc542a98cc07f6a24635f26015e7c8d0ef19efe 9.9s done
// Jan 6 01:33:48 PM  #5 DONE 13.5s
// Jan 6 01:33:48 PM  
// Jan 6 01:33:48 PM  #7 [2/2] COPY target/segunda-0.0.1-SNAPSHOT.jar app.jar
// Jan 6 01:33:49 PM  #7 DONE 0.2s
// Jan 6 01:33:49 PM  
// Jan 6 01:33:49 PM  #8 exporting to oci image format
// Jan 6 01:33:49 PM  #8 exporting layers
// Jan 6 01:33:52 PM  #8 exporting layers 3.0s done
// Jan 6 01:33:52 PM  #8 exporting manifest sha256:31761ca9d46120803c72e2baf026c058515bcdfac7558d096e29dfec259cf9b4 done
// Jan 6 01:33:52 PM  #8 exporting config sha256:fd1a700b28a17df3270b792a65b956c3ce3195fab5fbef312065fa1972ab8854 done
// Jan 6 01:34:00 PM  #8 DONE 10.9s
// Jan 6 01:34:00 PM  
// Jan 6 01:34:00 PM  #9 exporting cache
// Jan 6 01:34:06 PM  #9 DONE 6.7s
// Jan 6 01:34:07 PM  Pushing image to registry...
// Jan 6 01:34:12 PM  Upload succeeded
// Jan 6 01:34:12 PM  DONE
// Jan 6 01:34:49 PM  
// Jan 6 01:34:49 PM    .   ____          _            __ _ _
// Jan 6 01:34:49 PM   /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
// Jan 6 01:34:49 PM  ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
// Jan 6 01:34:49 PM   \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
// Jan 6 01:34:49 PM    '  |____| .__|_| |_|_| |_\__, | / / / /
// Jan 6 01:34:49 PM   =========|_|==============|___/=/_/_/_/
// Jan 6 01:34:49 PM   :: Spring Boot ::                (v3.0.0)
// Jan 6 01:34:49 PM  
// Jan 6 01:34:51 PM  2023-01-06T16:34:51.361Z  INFO 1 --- [           main] c.probando.segunda.SegundaApplication    : Starting SegundaApplication v0.0.1-SNAPSHOT using Java 19.0.1 with PID 1 (/app.jar started by root in /)
// Jan 6 01:34:51 PM  2023-01-06T16:34:51.365Z  INFO 1 --- [           main] c.probando.segunda.SegundaApplication    : No active profile set, falling back to 1 default profile: "default"
// Jan 6 01:35:16 PM  2023-01-06T16:35:16.162Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
// Jan 6 01:35:19 PM  2023-01-06T16:35:19.259Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 2894 ms. Found 8 JPA repository interfaces.
// Jan 6 01:35:43 PM  2023-01-06T16:35:43.762Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
// Jan 6 01:35:44 PM  2023-01-06T16:35:44.364Z  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
// Jan 6 01:35:44 PM  2023-01-06T16:35:44.365Z  INFO 1 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.1]
// Jan 6 01:35:47 PM  2023-01-06T16:35:47.757Z  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
// Jan 6 01:35:47 PM  2023-01-06T16:35:47.771Z  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 54703 ms
// Jan 6 01:35:59 PM  2023-01-06T16:35:59.265Z  INFO 1 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
// Jan 6 01:36:00 PM  2023-01-06T16:36:00.967Z  INFO 1 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 6.1.5.Final
// Jan 6 01:36:08 PM  2023-01-06T16:36:08.155Z  WARN 1 --- [           main] org.hibernate.orm.deprecation            : HHH90000021: Encountered deprecated setting [javax.persistence.sharedCache.mode], use [jakarta.persistence.sharedCache.mode] instead
// Jan 6 01:36:11 PM  2023-01-06T16:36:11.871Z  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
// Jan 6 01:36:19 PM  2023-01-06T16:36:19.563Z ERROR 1 --- [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Exception during pool initialization.
// Jan 6 01:36:19 PM  
// Jan 6 01:36:19 PM  java.sql.SQLSyntaxErrorException: User 'urjblmmzi0dotuou' has exceeded the 'max_user_connections' resource (current value: 5)
// Jan 6 01:36:19 PM       at com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:120) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:19 PM       at com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:122) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:19 PM       at com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:828) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:19 PM       at com.mysql.cj.jdbc.ConnectionImpl.<init>(ConnectionImpl.java:448) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:19 PM       at com.mysql.cj.jdbc.ConnectionImpl.getInstance(ConnectionImpl.java:241) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:19 PM       at com.mysql.cj.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:198) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.util.DriverDataSource.getConnection(DriverDataSource.java:138) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.pool.PoolBase.newConnection(PoolBase.java:359) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.pool.PoolBase.newPoolEntry(PoolBase.java:201) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.pool.HikariPool.createPoolEntry(HikariPool.java:470) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.pool.HikariPool.checkFailFast(HikariPool.java:561) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.pool.HikariPool.<init>(HikariPool.java:100) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.HikariDataSource.getConnection(HikariDataSource.java:112) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl.getConnection(DatasourceConnectionProviderImpl.java:122) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator$ConnectionProviderJdbcConnectionAccess.obtainConnection(JdbcEnvironmentInitiator.java:284) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:177) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:36) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.boot.registry.internal.StandardServiceRegistryImpl.initiateService(StandardServiceRegistryImpl.java:119) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.service.internal.AbstractServiceRegistryImpl.createService(AbstractServiceRegistryImpl.java:255) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.service.internal.AbstractServiceRegistryImpl.initializeService(AbstractServiceRegistryImpl.java:230) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.service.internal.AbstractServiceRegistryImpl.getService(AbstractServiceRegistryImpl.java:207) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.boot.model.relational.Database.<init>(Database.java:44) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.getDatabase(InFlightMetadataCollectorImpl.java:218) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.<init>(InFlightMetadataCollectorImpl.java:191) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.boot.model.process.spi.MetadataBuildingProcess.complete(MetadataBuildingProcess.java:138) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.metadata(EntityManagerFactoryBuilderImpl.java:1350) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1421) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:376) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:409) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:396) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:352) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1797) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1747) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:599) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:521) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:326) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:324) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:200) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1130) ~[spring-context-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:905) ~[spring-context-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:584) ~[spring-context-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:19 PM       at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:730) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:19 PM       at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:432) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:19 PM       at org.springframework.boot.SpringApplication.run(SpringApplication.java:308) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:19 PM       at org.springframework.boot.SpringApplication.run(SpringApplication.java:1302) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:19 PM       at org.springframework.boot.SpringApplication.run(SpringApplication.java:1291) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:19 PM       at com.probando.segunda.SegundaApplication.main(SegundaApplication.java:13) ~[classes!/:0.0.1-SNAPSHOT]
// Jan 6 01:36:19 PM       at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104) ~[na:na]
// Jan 6 01:36:19 PM       at java.base/java.lang.reflect.Method.invoke(Method.java:578) ~[na:na]
// Jan 6 01:36:19 PM       at org.springframework.boot.loader.MainMethodRunner.run(MainMethodRunner.java:49) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:19 PM       at org.springframework.boot.loader.Launcher.launch(Launcher.java:95) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:19 PM       at org.springframework.boot.loader.Launcher.launch(Launcher.java:58) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:19 PM       at org.springframework.boot.loader.JarLauncher.main(JarLauncher.java:65) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:19 PM  
// Jan 6 01:36:19 PM  2023-01-06T16:36:19.571Z  WARN 1 --- [           main] o.h.e.j.e.i.JdbcEnvironmentInitiator     : HHH000342: Could not obtain connection to query metadata
// Jan 6 01:36:19 PM  
// Jan 6 01:36:19 PM  java.sql.SQLSyntaxErrorException: User 'urjblmmzi0dotuou' has exceeded the 'max_user_connections' resource (current value: 5)
// Jan 6 01:36:19 PM       at com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:120) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:19 PM       at com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:122) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:19 PM       at com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:828) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:19 PM       at com.mysql.cj.jdbc.ConnectionImpl.<init>(ConnectionImpl.java:448) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:19 PM       at com.mysql.cj.jdbc.ConnectionImpl.getInstance(ConnectionImpl.java:241) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:19 PM       at com.mysql.cj.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:198) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.util.DriverDataSource.getConnection(DriverDataSource.java:138) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.pool.PoolBase.newConnection(PoolBase.java:359) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.pool.PoolBase.newPoolEntry(PoolBase.java:201) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.pool.HikariPool.createPoolEntry(HikariPool.java:470) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.pool.HikariPool.checkFailFast(HikariPool.java:561) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.pool.HikariPool.<init>(HikariPool.java:100) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at com.zaxxer.hikari.HikariDataSource.getConnection(HikariDataSource.java:112) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:19 PM       at org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl.getConnection(DatasourceConnectionProviderImpl.java:122) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator$ConnectionProviderJdbcConnectionAccess.obtainConnection(JdbcEnvironmentInitiator.java:284) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:177) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator.initiateService(JdbcEnvironmentInitiator.java:36) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.boot.registry.internal.StandardServiceRegistryImpl.initiateService(StandardServiceRegistryImpl.java:119) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.service.internal.AbstractServiceRegistryImpl.createService(AbstractServiceRegistryImpl.java:255) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.service.internal.AbstractServiceRegistryImpl.initializeService(AbstractServiceRegistryImpl.java:230) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.service.internal.AbstractServiceRegistryImpl.getService(AbstractServiceRegistryImpl.java:207) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.boot.model.relational.Database.<init>(Database.java:44) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.getDatabase(InFlightMetadataCollectorImpl.java:218) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.boot.internal.InFlightMetadataCollectorImpl.<init>(InFlightMetadataCollectorImpl.java:191) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.boot.model.process.spi.MetadataBuildingProcess.complete(MetadataBuildingProcess.java:138) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.metadata(EntityManagerFactoryBuilderImpl.java:1350) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1421) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:19 PM       at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:376) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:409) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:396) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:352) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1797) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1747) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:599) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:521) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:326) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:324) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:200) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1130) ~[spring-context-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:905) ~[spring-context-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:584) ~[spring-context-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:19 PM       at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:19 PM       at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:730) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:19 PM       at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:432) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:19 PM       at org.springframework.boot.SpringApplication.run(SpringApplication.java:308) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:19 PM       at org.springframework.boot.SpringApplication.run(SpringApplication.java:1302) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:19 PM       at org.springframework.boot.SpringApplication.run(SpringApplication.java:1291) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:19 PM       at com.probando.segunda.SegundaApplication.main(SegundaApplication.java:13) ~[classes!/:0.0.1-SNAPSHOT]
// Jan 6 01:36:19 PM       at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104) ~[na:na]
// Jan 6 01:36:19 PM       at java.base/java.lang.reflect.Method.invoke(Method.java:578) ~[na:na]
// Jan 6 01:36:19 PM       at org.springframework.boot.loader.MainMethodRunner.run(MainMethodRunner.java:49) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:19 PM       at org.springframework.boot.loader.Launcher.launch(Launcher.java:95) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:19 PM       at org.springframework.boot.loader.Launcher.launch(Launcher.java:58) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:19 PM       at org.springframework.boot.loader.JarLauncher.main(JarLauncher.java:65) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:19 PM  
// Jan 6 01:36:19 PM  2023-01-06T16:36:19.858Z  INFO 1 --- [           main] SQL dialect                              : HHH000400: Using dialect: org.hibernate.dialect.MySQLDialect
// Jan 6 01:36:57 PM  2023-01-06T16:36:57.065Z  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
// Jan 6 01:36:58 PM  2023-01-06T16:36:58.554Z ERROR 1 --- [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Exception during pool initialization.
// Jan 6 01:36:58 PM  
// Jan 6 01:36:58 PM  java.sql.SQLSyntaxErrorException: User 'urjblmmzi0dotuou' has exceeded the 'max_user_connections' resource (current value: 5)
// Jan 6 01:36:58 PM       at com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:120) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:58 PM       at com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:122) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:58 PM       at com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:828) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:58 PM       at com.mysql.cj.jdbc.ConnectionImpl.<init>(ConnectionImpl.java:448) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:58 PM       at com.mysql.cj.jdbc.ConnectionImpl.getInstance(ConnectionImpl.java:241) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:58 PM       at com.mysql.cj.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:198) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:58 PM       at com.zaxxer.hikari.util.DriverDataSource.getConnection(DriverDataSource.java:138) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:58 PM       at com.zaxxer.hikari.pool.PoolBase.newConnection(PoolBase.java:359) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:58 PM       at com.zaxxer.hikari.pool.PoolBase.newPoolEntry(PoolBase.java:201) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:58 PM       at com.zaxxer.hikari.pool.HikariPool.createPoolEntry(HikariPool.java:470) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:58 PM       at com.zaxxer.hikari.pool.HikariPool.checkFailFast(HikariPool.java:561) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:58 PM       at com.zaxxer.hikari.pool.HikariPool.<init>(HikariPool.java:100) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:58 PM       at com.zaxxer.hikari.HikariDataSource.getConnection(HikariDataSource.java:112) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:58 PM       at org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl.getConnection(DatasourceConnectionProviderImpl.java:122) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator$ConnectionProviderJdbcConnectionAccess.obtainConnection(JdbcEnvironmentInitiator.java:284) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.resource.transaction.backend.jdbc.internal.DdlTransactionIsolatorNonJtaImpl.getIsolatedConnection(DdlTransactionIsolatorNonJtaImpl.java:41) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.tool.schema.internal.exec.ImprovedExtractionContextImpl.getJdbcConnection(ImprovedExtractionContextImpl.java:63) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.tool.schema.internal.exec.ImprovedExtractionContextImpl.getJdbcDatabaseMetaData(ImprovedExtractionContextImpl.java:70) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.tool.schema.extract.internal.InformationExtractorJdbcDatabaseMetaDataImpl.processTableResultSet(InformationExtractorJdbcDatabaseMetaDataImpl.java:64) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.tool.schema.extract.internal.AbstractInformationExtractorImpl.getTables(AbstractInformationExtractorImpl.java:564) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.tool.schema.extract.internal.DatabaseInformationImpl.getTablesInformation(DatabaseInformationImpl.java:122) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.tool.schema.internal.GroupedSchemaMigratorImpl.performTablesMigration(GroupedSchemaMigratorImpl.java:71) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.tool.schema.internal.AbstractSchemaMigrator.performMigration(AbstractSchemaMigrator.java:225) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.tool.schema.internal.AbstractSchemaMigrator.doMigration(AbstractSchemaMigrator.java:126) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:284) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:143) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at java.base/java.util.HashMap.forEach(HashMap.java:1429) ~[na:na]
// Jan 6 01:36:58 PM       at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:140) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:334) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:415) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1425) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:58 PM       at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:376) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:409) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:396) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:352) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1797) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1747) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:599) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:521) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:326) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:324) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:200) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1130) ~[spring-context-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:905) ~[spring-context-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:584) ~[spring-context-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:58 PM       at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:58 PM       at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:730) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:58 PM       at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:432) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:58 PM       at org.springframework.boot.SpringApplication.run(SpringApplication.java:308) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:58 PM       at org.springframework.boot.SpringApplication.run(SpringApplication.java:1302) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:58 PM       at org.springframework.boot.SpringApplication.run(SpringApplication.java:1291) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:58 PM       at com.probando.segunda.SegundaApplication.main(SegundaApplication.java:13) ~[classes!/:0.0.1-SNAPSHOT]
// Jan 6 01:36:58 PM       at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104) ~[na:na]
// Jan 6 01:36:58 PM       at java.base/java.lang.reflect.Method.invoke(Method.java:578) ~[na:na]
// Jan 6 01:36:58 PM       at org.springframework.boot.loader.MainMethodRunner.run(MainMethodRunner.java:49) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:58 PM       at org.springframework.boot.loader.Launcher.launch(Launcher.java:95) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:58 PM       at org.springframework.boot.loader.Launcher.launch(Launcher.java:58) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:58 PM       at org.springframework.boot.loader.JarLauncher.main(JarLauncher.java:65) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:58 PM  
// Jan 6 01:36:58 PM  2023-01-06T16:36:58.559Z  WARN 1 --- [           main] o.h.engine.jdbc.spi.SqlExceptionHelper   : SQL Error: 1226, SQLState: 42000
// Jan 6 01:36:58 PM  2023-01-06T16:36:58.559Z ERROR 1 --- [           main] o.h.engine.jdbc.spi.SqlExceptionHelper   : User 'urjblmmzi0dotuou' has exceeded the 'max_user_connections' resource (current value: 5)
// Jan 6 01:36:58 PM  2023-01-06T16:36:58.657Z ERROR 1 --- [           main] j.LocalContainerEntityManagerFactoryBean : Failed to initialize JPA EntityManagerFactory: [PersistenceUnit: default] Unable to build Hibernate SessionFactory; nested exception is org.hibernate.exception.SQLGrammarException: Unable to open JDBC Connection for DDL execution
// Jan 6 01:36:58 PM  2023-01-06T16:36:58.660Z  WARN 1 --- [           main] ConfigServletWebServerApplicationContext : Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/autoconfigure/orm/jpa/HibernateJpaConfiguration.class]: [PersistenceUnit: default] Unable to build Hibernate SessionFactory; nested exception is org.hibernate.exception.SQLGrammarException: Unable to open JDBC Connection for DDL execution
// Jan 6 01:36:58 PM  2023-01-06T16:36:58.663Z  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Stopping service [Tomcat]
// Jan 6 01:36:59 PM  2023-01-06T16:36:59.158Z  INFO 1 --- [           main] .s.b.a.l.ConditionEvaluationReportLogger :
// Jan 6 01:36:59 PM  
// Jan 6 01:36:59 PM  Error starting ApplicationContext. To display the condition evaluation report re-run your application with 'debug' enabled.
// Jan 6 01:36:59 PM  2023-01-06T16:36:59.755Z ERROR 1 --- [           main] o.s.boot.SpringApplication               : Application run failed
// Jan 6 01:36:59 PM  
// Jan 6 01:36:59 PM  org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'entityManagerFactory' defined in class path resource [org/springframework/boot/autoconfigure/orm/jpa/HibernateJpaConfiguration.class]: [PersistenceUnit: default] Unable to build Hibernate SessionFactory; nested exception is org.hibernate.exception.SQLGrammarException: Unable to open JDBC Connection for DDL execution
// Jan 6 01:36:59 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1751) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:599) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:521) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:326) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:234) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:324) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:200) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.context.support.AbstractApplicationContext.getBean(AbstractApplicationContext.java:1130) ~[spring-context-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:905) ~[spring-context-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:584) ~[spring-context-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:146) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:59 PM       at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:730) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:59 PM       at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:432) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:59 PM       at org.springframework.boot.SpringApplication.run(SpringApplication.java:308) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:59 PM       at org.springframework.boot.SpringApplication.run(SpringApplication.java:1302) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:59 PM       at org.springframework.boot.SpringApplication.run(SpringApplication.java:1291) ~[spring-boot-3.0.0.jar!/:3.0.0]
// Jan 6 01:36:59 PM       at com.probando.segunda.SegundaApplication.main(SegundaApplication.java:13) ~[classes!/:0.0.1-SNAPSHOT]
// Jan 6 01:36:59 PM       at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104) ~[na:na]
// Jan 6 01:36:59 PM       at java.base/java.lang.reflect.Method.invoke(Method.java:578) ~[na:na]
// Jan 6 01:36:59 PM       at org.springframework.boot.loader.MainMethodRunner.run(MainMethodRunner.java:49) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:59 PM       at org.springframework.boot.loader.Launcher.launch(Launcher.java:95) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:59 PM       at org.springframework.boot.loader.Launcher.launch(Launcher.java:58) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:59 PM       at org.springframework.boot.loader.JarLauncher.main(JarLauncher.java:65) ~[app.jar:0.0.1-SNAPSHOT]
// Jan 6 01:36:59 PM  Caused by: jakarta.persistence.PersistenceException: [PersistenceUnit: default] Unable to build Hibernate SessionFactory; nested exception is org.hibernate.exception.SQLGrammarException: Unable to open JDBC Connection for DDL execution
// Jan 6 01:36:59 PM       at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:421) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.afterPropertiesSet(AbstractEntityManagerFactoryBean.java:396) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.afterPropertiesSet(LocalContainerEntityManagerFactoryBean.java:352) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1797) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1747) ~[spring-beans-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       ... 22 common frames omitted
// Jan 6 01:36:59 PM  Caused by: org.hibernate.exception.SQLGrammarException: Unable to open JDBC Connection for DDL execution
// Jan 6 01:36:59 PM       at org.hibernate.exception.internal.SQLExceptionTypeDelegate.convert(SQLExceptionTypeDelegate.java:64) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.exception.internal.StandardSQLExceptionConverter.convert(StandardSQLExceptionConverter.java:56) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.engine.jdbc.spi.SqlExceptionHelper.convert(SqlExceptionHelper.java:109) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.engine.jdbc.spi.SqlExceptionHelper.convert(SqlExceptionHelper.java:95) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.resource.transaction.backend.jdbc.internal.DdlTransactionIsolatorNonJtaImpl.getIsolatedConnection(DdlTransactionIsolatorNonJtaImpl.java:68) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.tool.schema.internal.exec.ImprovedExtractionContextImpl.getJdbcConnection(ImprovedExtractionContextImpl.java:63) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.tool.schema.internal.exec.ImprovedExtractionContextImpl.getJdbcDatabaseMetaData(ImprovedExtractionContextImpl.java:70) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.tool.schema.extract.internal.InformationExtractorJdbcDatabaseMetaDataImpl.processTableResultSet(InformationExtractorJdbcDatabaseMetaDataImpl.java:64) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.tool.schema.extract.internal.AbstractInformationExtractorImpl.getTables(AbstractInformationExtractorImpl.java:564) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.tool.schema.extract.internal.DatabaseInformationImpl.getTablesInformation(DatabaseInformationImpl.java:122) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.tool.schema.internal.GroupedSchemaMigratorImpl.performTablesMigration(GroupedSchemaMigratorImpl.java:71) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.tool.schema.internal.AbstractSchemaMigrator.performMigration(AbstractSchemaMigrator.java:225) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.tool.schema.internal.AbstractSchemaMigrator.doMigration(AbstractSchemaMigrator.java:126) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.performDatabaseAction(SchemaManagementToolCoordinator.java:284) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.lambda$process$5(SchemaManagementToolCoordinator.java:143) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at java.base/java.util.HashMap.forEach(HashMap.java:1429) ~[na:na]
// Jan 6 01:36:59 PM       at org.hibernate.tool.schema.spi.SchemaManagementToolCoordinator.process(SchemaManagementToolCoordinator.java:140) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.internal.SessionFactoryImpl.<init>(SessionFactoryImpl.java:334) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.boot.internal.SessionFactoryBuilderImpl.build(SessionFactoryBuilderImpl.java:415) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.jpa.boot.internal.EntityManagerFactoryBuilderImpl.build(EntityManagerFactoryBuilderImpl.java:1425) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.springframework.orm.jpa.vendor.SpringHibernateJpaPersistenceProvider.createContainerEntityManagerFactory(SpringHibernateJpaPersistenceProvider.java:66) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean.createNativeEntityManagerFactory(LocalContainerEntityManagerFactoryBean.java:376) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       at org.springframework.orm.jpa.AbstractEntityManagerFactoryBean.buildNativeEntityManagerFactory(AbstractEntityManagerFactoryBean.java:409) ~[spring-orm-6.0.2.jar!/:6.0.2]
// Jan 6 01:36:59 PM       ... 26 common frames omitted
// Jan 6 01:36:59 PM  Caused by: java.sql.SQLSyntaxErrorException: User 'urjblmmzi0dotuou' has exceeded the 'max_user_connections' resource (current value: 5)
// Jan 6 01:36:59 PM       at com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:120) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:59 PM       at com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:122) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:59 PM       at com.mysql.cj.jdbc.ConnectionImpl.createNewIO(ConnectionImpl.java:828) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:59 PM       at com.mysql.cj.jdbc.ConnectionImpl.<init>(ConnectionImpl.java:448) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:59 PM       at com.mysql.cj.jdbc.ConnectionImpl.getInstance(ConnectionImpl.java:241) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:59 PM       at com.mysql.cj.jdbc.NonRegisteringDriver.connect(NonRegisteringDriver.java:198) ~[mysql-connector-j-8.0.31.jar!/:8.0.31]
// Jan 6 01:36:59 PM       at com.zaxxer.hikari.util.DriverDataSource.getConnection(DriverDataSource.java:138) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:59 PM       at com.zaxxer.hikari.pool.PoolBase.newConnection(PoolBase.java:359) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:59 PM       at com.zaxxer.hikari.pool.PoolBase.newPoolEntry(PoolBase.java:201) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:59 PM       at com.zaxxer.hikari.pool.HikariPool.createPoolEntry(HikariPool.java:470) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:59 PM       at com.zaxxer.hikari.pool.HikariPool.checkFailFast(HikariPool.java:561) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:59 PM       at com.zaxxer.hikari.pool.HikariPool.<init>(HikariPool.java:100) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:59 PM       at com.zaxxer.hikari.HikariDataSource.getConnection(HikariDataSource.java:112) ~[HikariCP-5.0.1.jar!/:na]
// Jan 6 01:36:59 PM       at org.hibernate.engine.jdbc.connections.internal.DatasourceConnectionProviderImpl.getConnection(DatasourceConnectionProviderImpl.java:122) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.engine.jdbc.env.internal.JdbcEnvironmentInitiator$ConnectionProviderJdbcConnectionAccess.obtainConnection(JdbcEnvironmentInitiator.java:284) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       at org.hibernate.resource.transaction.backend.jdbc.internal.DdlTransactionIsolatorNonJtaImpl.getIsolatedConnection(DdlTransactionIsolatorNonJtaImpl.java:41) ~[hibernate-core-6.1.5.Final.jar!/:6.1.5.Final]
// Jan 6 01:36:59 PM       ... 44 common frames omitted
// Jan 6 01:36:59 PM  
// Jan 6 01:37:27 PM  
// Jan 6 01:37:27 PM    .   ____          _            __ _ _
// Jan 6 01:37:27 PM   /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
// Jan 6 01:37:27 PM  ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
// Jan 6 01:37:27 PM   \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
// Jan 6 01:37:27 PM    '  |____| .__|_| |_|_| |_\__, | / / / /
// Jan 6 01:37:27 PM   =========|_|==============|___/=/_/_/_/
// Jan 6 01:37:27 PM   :: Spring Boot ::                (v3.0.0)
// Jan 6 01:37:27 PM  
// Jan 6 01:37:29 PM  2023-01-06T16:37:29.461Z  INFO 1 --- [           main] c.probando.segunda.SegundaApplication    : Starting SegundaApplication v0.0.1-SNAPSHOT using Java 19.0.1 with PID 1 (/app.jar started by root in /)
// Jan 6 01:37:29 PM  2023-01-06T16:37:29.555Z  INFO 1 --- [           main] c.probando.segunda.SegundaApplication    : No active profile set, falling back to 1 default profile: "default"
// Jan 6 01:37:53 PM  2023-01-06T16:37:53.359Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
// Jan 6 01:37:56 PM  2023-01-06T16:37:56.956Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 3378 ms. Found 8 JPA repository interfaces.
// Jan 6 01:38:19 PM  2023-01-06T16:38:19.259Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
// Jan 6 01:38:19 PM  2023-01-06T16:38:19.560Z  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
// Jan 6 01:38:19 PM  2023-01-06T16:38:19.561Z  INFO 1 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.1]
// Jan 6 01:38:23 PM  2023-01-06T16:38:23.661Z  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
// Jan 6 01:38:23 PM  2023-01-06T16:38:23.780Z  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 52822 ms
// Jan 6 01:38:37 PM  2023-01-06T16:38:37.674Z  INFO 1 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
// Jan 6 01:38:39 PM  2023-01-06T16:38:39.461Z  INFO 1 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 6.1.5.Final
// Jan 6 01:38:44 PM  2023-01-06T16:38:44.861Z  WARN 1 --- [           main] org.hibernate.orm.deprecation            : HHH90000021: Encountered deprecated setting [javax.persistence.sharedCache.mode], use [jakarta.persistence.sharedCache.mode] instead
// Jan 6 01:38:48 PM  2023-01-06T16:38:48.762Z  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
// Jan 6 01:38:54 PM  2023-01-06T16:38:54.576Z  INFO 1 --- [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection com.mysql.cj.jdbc.ConnectionImpl@38b972d7
// Jan 6 01:38:54 PM  2023-01-06T16:38:54.578Z  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
// Jan 6 01:38:55 PM  2023-01-06T16:38:55.961Z  INFO 1 --- [           main] SQL dialect                              : HHH000400: Using dialect: org.hibernate.dialect.MySQLDialect
// Jan 6 01:40:09 PM  2023-01-06T16:40:09.669Z  INFO 1 --- [           main] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000490: Using JtaPlatform implementation: [org.hibernate.engine.transaction.jta.platform.internal.NoJtaPlatform]
// Jan 6 01:40:09 PM  2023-01-06T16:40:09.678Z  INFO 1 --- [           main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'
// Jan 6 01:40:35 PM  2023-01-06T16:40:35.155Z  WARN 1 --- [           main] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning
// Jan 6 01:40:45 PM  2023-01-06T16:40:45.859Z  INFO 1 --- [           main] o.s.s.web.DefaultSecurityFilterChain     : Will secure any request with [org.springframework.security.web.session.DisableEncodeUrlFilter@6075b369, org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@231cdda8, org.springframework.security.web.context.SecurityContextHolderFilter@7d0cd23c, org.springframework.security.web.header.HeaderWriterFilter@50bc3219, org.springframework.web.filter.CorsFilter@6b70d1fb, org.springframework.security.web.authentication.logout.LogoutFilter@2506b881, com.probando.segunda.security.JWTAuthorizationFilter@b7838a9, com.probando.segunda.security.JWTAuthenticationFilter@3002e397, org.springframework.security.web.savedrequest.RequestCacheAwareFilter@6b0f266e, org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@53314f76, org.springframework.security.web.authentication.AnonymousAuthenticationFilter@7da1e005, org.springframework.security.web.session.SessionManagementFilter@22791b75, org.springframework.security.web.access.ExceptionTranslationFilter@6d294ddc, org.springframework.security.web.access.intercept.AuthorizationFilter@342ee097]
// Jan 6 01:40:53 PM  2023-01-06T16:40:53.159Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
// Jan 6 01:40:54 PM  2023-01-06T16:40:54.162Z  INFO 1 --- [ionShutdownHook] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
// Jan 6 01:40:54 PM  2023-01-06T16:40:54.259Z  INFO 1 --- [ionShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
// Jan 6 01:40:54 PM  2023-01-06T16:40:54.556Z  INFO 1 --- [           main] c.probando.segunda.SegundaApplication    : Started SegundaApplication in 217.803 seconds (process running for 234.004)
// Jan 6 01:40:56 PM  2023-01-06T16:40:56.057Z  INFO 1 --- [ionShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.